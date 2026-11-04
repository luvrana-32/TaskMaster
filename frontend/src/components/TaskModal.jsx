import React, { useCallback, useEffect, useState } from "react";
import {
  baseControlClasses,
  DEFAULT_TASK,
  priorityStyles,
} from "../assets/dummy";
import { TASKS_API_URL } from "../config/api";
import {
  AlignLeft,
  Calendar,
  CheckCircle,
  FlagIcon,
  PlusCircleIcon,
  Save,
  X,
} from "lucide-react";

const TaskModal = ({ isOpen, onClose, taskToEdit, onSave, onLogout }) => {
  const [taskData, setTaskData] = useState(DEFAULT_TASK);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!isOpen) return;
    if (taskToEdit) {
      const normalized =
        taskToEdit.completed === "Yes" || taskToEdit.completed === true
          ? "Yes"
          : "No";

      setTaskData({
        ...DEFAULT_TASK,
        title: taskToEdit.title || "",
        description: taskToEdit.description || "",
        priority: taskToEdit.priority || "Low",
        dueDate: taskToEdit.dueDate?.split("T")[0] || "",
        completed: normalized,
        id: taskToEdit._id,
      });
    } else {
      setTaskData(DEFAULT_TASK);
    }
    setError(null);
  }, [isOpen, taskToEdit]);

  const handleChange = useCallback(async (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  });

  const getHeaders = useCallback(() => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No auth token found");
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (taskData.dueDate < today) {
        setError("Due date cannot be in the past.");
        return;
      }
      setLoading(true);
      setError(true);

      try {
        const isEdit = Boolean(taskData.id);
        const url = isEdit
          ? `${TASKS_API_URL}/${taskData.id}/tm`
          : `${TASKS_API_URL}/tm`;
        const resp = await fetch(url, {
          method: isEdit ? "PUT" : "POST",
          headers: getHeaders(),
          body: JSON.stringify(taskData),
        });
        if (!resp.ok) {
          if (resp.status === 401) return onLogout?.();
          const err = await resp.json();
          throw new Error(err.message || "Failed to save task");
        }
        const saved = await resp.json();
        onSave?.(saved);
        onClose();
      } catch (err) {
        console.error(err);
        setError(err.message || "An unexpected error occured");
      } finally {
        setLoading(false);
      }
    },
    [taskData, today, getHeaders, onLogout, onSave, onClose],
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-slate-900/35 z-50 flex items-center justify-center p-4">
      <div
        className="bg-white border border-slate-200 rounded-3xl max-w-md w-full shadow-2xl relative p-6
       animate-fadeIn"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-maintxt flex items-center gap-2">
            {taskData.id ? (
              <Save className="text-maintxt w-5 h-5" />
            ) : (
              <PlusCircleIcon className="text-maintxt w-5 h-5" />
            )}
            {taskData.id ? "Edit task" : "Create New Task"}
          </h2>

          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 bg-slate-50 rounded-xl transition-colors text-slate-600 hover:text-slate-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* from to fill to create a task */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div
              className="text-sm text-red-600 bg-transparent p-3 rounded-xl
           border border-red-100"
            >
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-maintxt mb-1">
              Task Title
            </label>
            <div
              className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-3 py-2.5 focus-within:ring-2
             focus-within:ring-indigo-500 focus-within:border-indigo-300 transition-all duration-200"
            >
              <input
                type="text"
                name="title"
                required
                value={taskData.title}
                onChange={handleChange}
                className="w-full focus:outline-none text-sm text-maintxt"
                placeholder="Enter task title"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-1 text-sm font-medium text-maintxt mb-1">
              <AlignLeft className="w-4 h-4 text-maintxt" /> Description
            </label>

            <textarea
              name="description"
              row="3"
              onChange={handleChange}
              value={taskData.description}
              className={baseControlClasses}
              placeholder="Add details about your task"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-1 text-sm font-medium text-maintxt mb-1">
                <FlagIcon className="w-4 h-4 text-maintxt" /> Priority
              </label>
              <select
                name="priority"
                value={taskData.priority}
                onChange={handleChange}
                className={`${baseControlClasses} ${
                  priorityStyles[taskData.priority]
                }`}
              >
                <option className="bg-two">Low</option>
                <option className="bg-two">Medium</option>
                <option className="bg-two">High</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-1 text-sm font-medium text-maintxt mb-1">
                <Calendar className="w-4 h-4 text-maintxt" /> Due Date
              </label>
              <input
                type="date"
                name="dueDate"
                required
                min={today}
                value={taskData.dueDate}
                onChange={handleChange}
                className={baseControlClasses}
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-1 text-sm font-medium text-maintxt mb-1">
              <CheckCircle className="w-4 h-4 text-maintxt" /> Status
            </label>
            <div className="flex gap-4">
              {[
                { val: "yes", label: "Completed" },
                { val: "No", label: "In Progress" },
              ].map(({ val, label }) => (
                <label key={val} className="flex items-center">
                  <input
                    type="radio"
                    className="h-4 w-4 accent-indigo-600 border-slate-300 focus:ring-indigo-500"
                    name="completed"
                    value={val}
                    checked={taskData.completed === val}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-maintxt text-sm">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            className="w-full bg-linear-to-r from-indigo-600 to-violet-600 text-white font-medium
             py-2.5 px-4 rounded-xl hover:rounded-2xl flex items-center justify-center gap-2 disabled:opacity-50
             hover:shadow-md shadow-sm cursor-pointer transition-all duration-300"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              "Saving..."
            ) : taskData.id ? (
              <>
                <Save className="w-4 h-4" />
                Update Task
              </>
            ) : (
              <>
                <PlusCircleIcon className="w-4 h-4" />
                Create Task
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
