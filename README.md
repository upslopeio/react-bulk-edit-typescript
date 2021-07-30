# React + TypeScript

## Wireframes

![](./wireframes.drawio.svg)

## Get Started

```
npx create-react-app react-bulk-edit --template typescript --use-npm
cd react-bulk-edit
```

## Steps

### Add Bootstrap

Add Bootstrap to `public/index.html`

```
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

## Topics

### JSX

New programming language, developed by Facebook for React.

Combination of HTML + JS.

1. DOM property names, not the HTML attribute names:
    - `class` is `className`
    - `for` is `htmlFor`
1. `{}` embed JavaScript

### Components

A function that returns a JSX element.

Function name should match the filename, the filename/function should be initial cap.  So `PersonList` as opposed to `personList`.

To reference a component, just use the function name:

```jsx
<PersonName />
```

Can be Class Components and Function Components. Function components are the standard now.

### State

Pair of variables:

1. Current value
1. Function to update the value

In order to add state:

1. Define it:
    ```ts
    const [label, setLabel] = useState<string>("");
    ```
1. Add some event handler to update it
1. Reference the value somewhere

For form fields, you need two props:

1. onChange
1. value

Add some event handler

#### How does this happen?

Every time you call `setXYZ` it re-renders the entire component in-memory (and all child components).

Does a diff between the in-memory component, and the DOM, and surgically applies changes.

### Props

Just like HTML attributes.

## References

https://create-react-app.dev/docs/adding-typescript/