
function interviewQuestion(job) {
    if (job === 'developper') {
        return function (name) {
            console.log(name + ' can you explain your job ?')
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ' what subject do you teach ?')
        }
    } else {
        return function (name) {
            console.log(name + ' what do you do ?')
        }
    }
};

var teacherQiestion = interviewQuestion('teacher')
teacherQiestion('Mark');

var jobInterview = interviewQuestion('developper')('Steven')