const todayEvents = [
    {
        id: 1,
        title: "Team Standup",
        startTime: "9:00 AM",
        endTime: "9:30 AM",
        location: "Conference Room",
        description: "Quick update on ongoing tasks.",
    },
    {
        id: 2,
        title: "Meeting with Client",
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        location: "Office",
        description: "Discuss project updates with the client.",
    },
    {
        id: 3,
        title: "Lunch with Team",
        startTime: "12:00 PM",
        endTime: "1:00 PM",
        location: "Cafeteria",
        description: "Team bonding over lunch.",
    },
    {
        id: 4,
        title: "Project Review",
        startTime: "2:00 PM",
        endTime: "3:00 PM",
        location: "Meeting Room",
        description: "Review project progress.",
    },
    {
        id: 5,
        title: "Training Session",
        startTime: "4:00 PM",
        endTime: "5:00 PM",
        location: "Training Room",
        description: "Training on new tools.",
    },
];

const tomorrowEvents = [
    {
        id: 1,
        title: "Training Workshop",
        startTime: "9:30 AM",
        endTime: "11:00 AM",
        location: "Training Room",
        description: "Workshop on new technologies.",
    },
    {
        id: 2,
        title: "Project Planning",
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        location: "Meeting Room",
        description: "Plan upcoming project tasks.",
    },
    {
        id: 3,
        title: "Code Review",
        startTime: "11:30 AM",
        endTime: "12:30 PM",
        location: "Meeting Room",
        description: "Review code changes.",
    },
    {
        id: 4,
        title: "Client Presentation",
        startTime: "2:00 PM",
        endTime: "3:00 PM",
        location: "Client Office",
        description: "Present project updates to the client.",
    },
    {
        id: 5,
        title: "Brainstorming Session",
        startTime: "3:30 PM",
        endTime: "4:30 PM",
        location: "Conference Room",
        description: "Brainstorm ideas for new project.",
    },

    {
        id: 6,
        title: "Team Lunch",
        startTime: "12:30 PM",
        endTime: "1:30 PM",
        location: "Restaurant",
        description: "Team lunch to celebrate milestones.",
    },
    {
        id: 7,
        title: "Project Review",
        startTime: "4:00 PM",
        endTime: "5:00 PM",
        location: "Meeting Room",
        description: "Review project progress and discuss challenges.",
    },
];

function formatEventMessage(event) {
    return `
        Title: ${event.title}
        Start Time: ${event.startTime}
        End Time: ${event.endTime}
        Location: ${event.location}
        Description: ${event.description}
    `;
}

function getTodayEvents() {
    return todayEvents.map(e => formatEventMessage(e))
}

function getTomorrowEvents() {
    return tomorrowEvents.map(e => formatEventMessage(e))
}

module.exports = {
    getTodayEvents,
    getTomorrowEvents
}