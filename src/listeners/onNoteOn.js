const onNoteOn = input => {
    input.addListener("noteon", (e) => {
        console.debug("ON: " + e.note.identifier);
    });

    input.addListener("noteoff", (e) => {
        console.debug("OFF: " + e.note.identifier);
    });
}

export default onNoteOn;
