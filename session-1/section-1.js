function emergency(patients) {
    // patient = {name, severity, hasData, condition }
    let missingDataList = patients.filter((patient) => !patient.hasData);
    let treatedImmediately = patients.filter(
        (patient) => patient.hasData && patient.condition === "critical",
    );
    let normalTreated = patients.filter(
        (patient) => patient.hasData && patient.condition === "normal",
    );
    normalTreated.sort((a, b) => b.severity - a.severity);
    return {
        missingDataList,
        treatedImmediately,
        normalTreated,
    };
}
