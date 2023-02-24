function urlSlug(title) {
    // Only change code below this line
    return title.trim().split(/\s+/).join("-").toLowerCase();
    // Only change code above this line
}

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");