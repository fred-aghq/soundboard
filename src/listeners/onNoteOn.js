const onNoteOn = input => {
    input.addListener("noteon", (e) => {
        console.log(e.note.identifier);
    });
}

export default onNoteOn;
