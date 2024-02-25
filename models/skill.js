const skills = [
    {id: 123, skill: 'HTML', complete: true},
    {id: 124, skill: 'CSS', complete: true},
    {id: 125, skill: 'JavaScript', complete: true},
    {id: 126, skill: 'Python', complete: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}

function create(skill) {
    skill.id = Date.now()*10
    skill.complete = false
    skills.push(skill)
  }
  
  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx, 1)
  }