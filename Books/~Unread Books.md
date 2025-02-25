
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
    truncate(Description, 512) as Description, 
    date_published as "Date Published", author AS Author
FROM "Books"
WHERE times_read = 0 AND date_started = date("")
```
