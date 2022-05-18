export default {
    meta: {
        title: "Haptic Walking Device",
        banner: "/pics/BE1200.png",
        complete: true,
        tags: "C/C++,Arduino,UI/UX,Telecommunications,Collaborative,Mobile App Development,Product Design,Embedded Systems",
        //objectives: `Usually from resume.`, // Objectives are seperated by PIPE '|'
        description: `The goal for this project was to design a device that utilizes sensors to detect
        objects from a certain range and instruct an internal servo to vibrate in response to the
        distance from the sensor to the object. The closer the object is to the sensor, the
        stronger the servo will vibrate. Additionally, this project utilizes a mobile app to act as
        both a pedometer and an audio informant for the distance between the user and an
        oncoming object. This would ultimately assist the visually-impaired in their day-to-day lives.`,
        timeline: [
            ["Mid-November 2021", "Final Project idea was chosen after a thorough, collaborative brainstorm session."]
        ],
    }, components: { links, description }
}

function links() {
    return (<div>
        ...
    </div>)
}

function description() {
    return (<div>
        ...
    </div>)
}
