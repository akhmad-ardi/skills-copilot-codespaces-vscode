function skillsMember() {
    return {
        name: 'GitHub Copilot',
        skills: ['JavaScript', 'Python', 'Ruby', 'Go'],
        introduce: function() {
            return `Hi, I'm ${this.name} and I have skills in ${this.skills.join(', ')}.`;
        }
    };
}