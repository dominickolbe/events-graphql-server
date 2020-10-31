# events-graphql-server

```
{
    event (_id: "5f9caf3933c3f46555d5c775") {
        _id
        name
        location
        createdAt
    }
}
```

```
{
    events (location: "London") {
        _id
        name
        location
        createdAt
    }
}
```

```
{
    events{
        _id
        name
        location
        createdAt
    }
}
```
