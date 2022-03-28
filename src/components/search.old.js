const doSearch = (e) => {
    setFound(0);
    let query = e.target.value
    const allTags = document.querySelectorAll(".MuiChip-colorPrimary .MuiChip-label")
    const defaultStyle = allTags[0].style
    if (query?.length) {
        allTags.forEach((node) => {
            node.style = defaultStyle // to reset
            if (node.innerHTML?.toLowerCase().includes(query.toLowerCase())) {
                node.style = "background-color: #c2a800";
                setFound(found + 1);
                //window.location.href = "#"+node.innerHTML
                //window.find(query) // TODO: make this actually good (atleast make it not stop typing after it found something)
            }
            setFound(0); // FIXME: make counter work here
        })
    } else {
        allTags.forEach((node) => {
            node.style = defaultStyle // reset all values [redundant]
        })
    }
}