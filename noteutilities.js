
function GetMaxIdFromNotes(main_data_array) {
    let id = 0;
    for (let i = 0; i < main_data_array.length; i++) {
        id = main_data_array[i].id > id ? main_data_array[i].id : id;
    }
    return id;
}

function addNotes(note) {
    //Increment the latest ID 
    note._date = new Date().toLocaleString();
    let main_data_array = fs.readFileSync()
    note.id = GetMaxIdFromNotes(main_data_array) + 1;
    main_data_array.push(note);
    localStorage.setItem(NOTES_MAIN_STORE, JSON.stringify(main_data_array));
}