import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const THEMES = ["light", "dark"];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen container mx-auto px-4 pt-24 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Appearance</h2>
        <p className="text-base-content/70 mt-1">
          Choose between light and dark mode
        </p>
      </div>

      {/* Theme Selector */}
      <div className="flex justify-between gap-8 mb-12">
        {THEMES.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`
              relative w-[40%] rounded-2xl border transition-all duration-200
              ${theme === t
                ? "border-primary shadow-lg scale-[1.02]"
                : "border-base-300 hover:border-base-content/30"}
            `}
          >
            <div
              className="rounded-2xl overflow-hidden"
              data-theme={t}
            >
              <div className="p-6 bg-base-100">
                <h3 className="text-lg font-semibold capitalize mb-3">
                  {t} mode
                </h3>

                {/* Mini preview */}
                <div className="rounded-xl border border-base-300 bg-base-200 p-4">
                  <div className="space-y-3">
                    <div className="bg-base-100 p-3 rounded-lg text-sm">
                      Hey! How's it going?
                    </div>
                    <div className="bg-primary text-primary-content p-3 rounded-lg text-sm ml-auto w-fit">
                      Working great!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Full Preview */}
      <h3 className="text-xl font-semibold mb-4">Preview</h3>

      <div className="rounded-2xl border border-base-300 bg-base-100 shadow-lg overflow-hidden">
        <div className="p-4 bg-base-200">
          <div className="max-w-lg mx-auto">
            <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-4 py-3 border-b border-base-300 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center font-medium">
                  J
                </div>
                <div>
                  <h3 className="font-medium text-sm">John Doe</h3>
                  <p className="text-xs text-base-content/70">Online</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-4 min-h-50 bg-base-100">
                {PREVIEW_MESSAGES.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isSent ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-xl p-3 text-sm
                        ${msg.isSent
                          ? "bg-primary text-primary-content"
                          : "bg-base-200"}
                      `}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-base-300">
                <div className="flex gap-2">
                  <input
                    className="input input-bordered flex-1 text-sm"
                    value="This is a preview"
                    readOnly
                  />
                  <button className="btn btn-primary">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;