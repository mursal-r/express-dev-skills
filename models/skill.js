const skills = [
    {id: 123, skill: 'HTML', complete: true},
    {id: 124, skill: 'CSS', complete: true},
    {id: 125, skill: 'JavaScript', complete: true},
    {id: 126, skill: 'Python', complete: false}
]

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function getAll() {
    return skills;
};