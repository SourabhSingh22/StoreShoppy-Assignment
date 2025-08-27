import React from "react";

const notifications = [
  { id: 1, icon: "🐞", text: "You fixed a bug.", time: "Just now" },
  { id: 2, icon: "👤", text: "New user registered.", time: "59 minutes ago" },
  { id: 3, icon: "🐞", text: "You fixed a bug.", time: "12 hours ago" },
  { id: 4, icon: "📡", text: "Andi Lane subscribed to you.", time: "Today, 11:59 AM" },
];

const activities = [
  { id: 1, avatar: "https://i.pravatar.cc/30?img=1", text: "Changed the style.", time: "Just now" },
  { id: 2, avatar: "https://i.pravatar.cc/30?img=2", text: "Released a new version.", time: "59 minutes ago" },
  { id: 3, avatar: "https://i.pravatar.cc/30?img=3", text: "Submitted a bug.", time: "12 hours ago" },
  { id: 4, avatar: "https://i.pravatar.cc/30?img=4", text: "Modified A data in Page X.", time: "Today, 11:59 AM" },
  { id: 5, avatar: "https://i.pravatar.cc/30?img=5", text: "Deleted a page in Project X.", time: "Feb 2, 2025" },
];

const contacts = [
  { id: 1, name: "Natali Craig", avatar: "https://i.pravatar.cc/30?img=6" },
  { id: 2, name: "Drew Cano", avatar: "https://i.pravatar.cc/30?img=7" },
  { id: 3, name: "Andi Lane", avatar: "https://i.pravatar.cc/30?img=8" },
  { id: 4, name: "Koray Okumus", avatar: "https://i.pravatar.cc/30?img=9" },
  { id: 5, name: "Kate Morrison", avatar: "https://i.pravatar.cc/30?img=10" },
  { id: 6, name: "Melody Macy", avatar: "https://i.pravatar.cc/30?img=11" },
];

const Notifications = ({ open }) => {
  return (
    <aside
      className={`fixed md:static top-0 right-0 h-full w-64 bg-white transition-transform duration-300 z-50
      ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-base sm:text-lg font-semibold">Notifications</h2>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-60px)]">
        {/* Notifications */}
        <div>
          <ul className="space-y-3">
            {notifications.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <div className="p-2 bg-gray-100 rounded-full">{item.icon}</div>
                <div>
                  <p className="text-sm text-gray-800">{item.text}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Activities */}
        <div>
          <h3 className="font-medium mb-3 text-gray-700">Activities</h3>
          <ul className="space-y-3">
            {activities.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <img src={item.avatar} alt={item.text} className="w-6 h-6 rounded-full" />
                <div>
                  <p className="text-sm text-gray-800">{item.text}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="font-medium mb-3 text-gray-700">Contacts</h3>
          <ul className="space-y-3">
            {contacts.map((c) => (
              <li key={c.id} className="flex items-center gap-3">
                <img src={c.avatar} alt={c.name} className="w-6 h-6 rounded-full" />
                <span className="text-sm text-gray-800">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Notifications;
