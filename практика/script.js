const personalPlanPeter = {
    name: 'Peter',
    age: 29,
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let {age} = plan,
            languages = plan.skills.languages;
        return `Мне ${age} и я владею языками: ${languages.join(' ').toUpperCase()} `;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExpirience(plan) {
    let {exp} = plan.skills;
    return exp;
}

showExpirience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let phrase = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        phrase += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    console.log(phrase);
}

showProgrammingLangs(personalPlanPeter);

