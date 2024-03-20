function showGroupInfo() {
    document.getElementById("groupInfo").classList.add("active");
    document.getElementById("members").classList.remove("active");
    document.getElementById("groupInfoBtn").classList.add("active");
    document.getElementById("membersBtn").classList.remove("active");
}

function showMembers() {
    document.getElementById("groupInfo").classList.remove("active");
    document.getElementById("members").classList.add("active");
    document.getElementById("groupInfoBtn").classList.remove("active");
    document.getElementById("membersBtn").classList.add("active");
}

// Mostrar información del grupo por defecto
showGroupInfo();
