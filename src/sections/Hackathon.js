export default {
    meta: {
        title: "WSU Hackathon 2021",
        banner: "https://github.com/ThatZiv/hackathon2021wsu/raw/main/pics/chat.PNG?raw=true",
        complete: true,
        tags: "Tags,Are,Seperated,Only,With,Commas",
        //objectives: `Usually from resume.`, // Objectives are seperated by PIPE '|'
        description: `Card content description`,
        timeline: [
            ["November 12, 2021", "Hackathon begins. Group had consensus on building a chat application."],
            ["November 12, 2021", "HTTP webserver and websocket server are setup."],
            ["November 13, 2021", "User and chat room hierarchy data structures are built."],
            ["November 13, 2021", "Backend is complete with a CRUD subsystem."],
            ["November 14, 2021", "Created HTML skeleton for login and main chatting page."],
            ["November 14, 2021", "Backend and frontend are linked, making the site entirely functional."],
            ["November 14, 2021", "Frontend styling is completed using Bootstrap CSS."],
        ]
    }, components: { links, statistics }
}

function links() {
    return (<div>
        ...
    </div>)
}

function statistics() {
    return (<div>
        ...
    </div>) 
}
