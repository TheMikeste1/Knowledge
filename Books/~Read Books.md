
```dataview
TABLE WITHOUT ID 
    link(
        file.link,
        substring(
            file.name, 
            0, 
            length(file.name) - (
                length(
                    split(file.name, " - ")[length(split(file.name, " - ")) - 1]
                ) + 3
            )
        )
    ) as Title,
    type as Type,
    genre as Genre, 
    times_read as "Times Read", 
    date_finished as "Date Finished",
    truncate(Thoughts, 512) as Thoughts, 
    truncate(Description, 128) as Description, 
    author AS Author
FROM "Books"
WHERE times_read = 1
```
