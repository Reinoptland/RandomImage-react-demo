# Installed 
- create-react-app
    - Command Line Interface, (CLI) a tool that creates a react app
        - Installs packages
        - Creates a folder, src, public,
        - Does a lot of configuration (but you can't see it without eject)
        - Has a development server 
            - that reloads when you change the code
            - Gives warnings 
            - Gives error pages 
        - Allows you to make a build (optimized version for the user)
        - Sets up 'Babel', which transpiles your javascript code

# Generating HTML with React

- Inside the render method of App
    - returns JSX, JavaScript (JavaScript XML)

# Props
- Attributes to JSX 
- Allows us to reuse Components
- subject is the prop, painting is the value
```js
    <RandomImage subject="painting" />
```
- Passed from parent to child components

# State
- "Allows interactivity"
- Allows the underlying data of our component to change
- For example when a user interacts with it 
- Use `this.setState` to update so React knows to rerender a component
- State is `about the component itself`

# Render

returns JSX

Allowed:
- JSX
- Strings
- Numbers
- Array of JSX / Strings / Numbers
- null

NOT ALLOWED:
- Object
- undefined
- Non enclosed JSX

```html
<h1>Hello</h1>
<p>Hi</p>
```

Interpolating values into JSX
 
```html
<h1>{ /* what are you allowed to put here? A: EXPRESSIONS */ } </h1>
```

As long as they do not evaluate to an object

# Handling events

Add an event listener
```html
<div onClick={this.toggle}></div>
```

Define a event handler
```js
toggle = () => {
    this.setState({ active: !this.state.active })
}
```
NOTE: event handlers should be arrow functions, because `they can't touch this` ;) 


# LifeCycle Methods

Moments in time where you can `do` something

[](https://cdn-images-1.medium.com/max/2400/1*sn-ftowp0_VVRbeUAFECMA.png)

Used like this:

```js
componentDidMount(){
    console.log('HAFHJAAAAAAAA, MGMNMNMAAAAA, HenjanaaaaaAAA')
}
```
NOTE: lifeCycle methods are only available in classes (at least like this)

or this:

```js
render(){
    return <h1>Hello!</h1>
}
```







