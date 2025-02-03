# Expo-router example of Stack nested inside a Drawer

This simple example shows a Stack layout nested inside a dynamic route (`[id]`) which is nested inside a Drawer layout.

The purpose is to show how to navigate between different dynamic routes - while showing the problem with resetting the state of the nested Stack.

Currently if you navigate to A/page1 then A/page2, you'll have a stack state of [A/page1, A/page2]. That seems right. But if you then navigate to B/page1, you'll have a stack state of [A/page1, A/page2, B/page1].

I'd like to avoid this case, b/c if you then pop the B/page1 from the stack you'll be left with a stack state of [A/page1, A/page2] but the `params.id` for the Drawer layout will still be "B".

## Devtools

Note that this repo also includes the react-navigation devtools to help debugging the navigation state.
