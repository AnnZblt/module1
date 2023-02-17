const filter = (all, failed) => {
    const passedStudents = [];
    for (const i in all) {
        if (!failed.includes(all[i])) {
            passedStudents.push(all[i]);
        }
    }
    return passedStudents;
};

filter();