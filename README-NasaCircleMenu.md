# NasaCircle with Circular Menu

This document explains how to use the NasaCircle component with the new circular menu functionality.

## Overview

The NasaCircle component now supports an optional circular menu that appears when a user right-clicks (or long-presses on mobile) on the circle. The menu is centered around the NasaCircle and stays in position when scrolling.

## Features

- Right-click (or long-press on mobile) to open a circular menu
- Menu items appear in a circle around the NasaCircle
- Menu stays centered on the NasaCircle when scrolling
- Clicking outside the NasaCircle or its menu closes the menu
- Right-clicking another NasaCircle closes any open menu and opens a new one
- Smooth animations for menu opening and closing
- Responsive design that works on both desktop and mobile

## Usage

### Basic Usage

```tsx
import NasaCircle from './components/NasaCircle';

const MyComponent = () => {
  // Define menu items
  const menuItems = [
    {
      icon: '📝',
      label: 'Edit',
      onClick: () => console.log('Edit clicked')
    },
    {
      icon: '🗑️',
      label: 'Delete',
      onClick: () => console.log('Delete clicked')
    },
    {
      icon: '📋',
      label: 'Copy',
      onClick: () => console.log('Copy clicked')
    }
  ];

  return (
    <NasaCircle
      title="Circle with Menu"
      color="#4a90e2"
      backgroundColor="#f0f8ff"
      enableCircularMenu={true}
      circularMenuItems={menuItems}
    >
      <p>Right-click me to open the circular menu!</p>
    </NasaCircle>
  );
};
```

### With InteractiveNasaCircle

```tsx
import InteractiveNasaCircle from './components/InteractiveNasaCircle';

const MyComponent = () => {
  // Define menu items
  const menuItems = [
    {
      icon: '📝',
      label: 'Edit',
      onClick: () => console.log('Edit clicked')
    },
    {
      icon: '🗑️',
      label: 'Delete',
      onClick: () => console.log('Delete clicked')
    }
  ];

  // Example data for interactive circle
  const data = [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' }
  ];

  return (
    <InteractiveNasaCircle
      title="Interactive Circle with Menu"
      color="#4a90e2"
      backgroundColor="#f0f8ff"
      data={data}
      renderItem={(item) => (
        <div>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      )}
      enableCircularMenu={true}
      circularMenuItems={menuItems}
    />
  );
};
```

## Props

### NasaCircle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| enableCircularMenu | boolean | false | Enable the circular menu functionality |
| circularMenuItems | Array<CircularMenuItem> | [] | Array of menu items to display in the circular menu |

### CircularMenuItem

| Prop | Type | Description |
|------|------|-------------|
| icon | ReactNode | Icon to display in the menu item |
| label | string | Label text for the menu item |
| onClick | () => void | Function to call when the menu item is clicked |

## Example Component

An example component `NasaCircleWithMenu.tsx` is provided to demonstrate how to use the circular menu functionality.

## Mobile Support

The circular menu supports both right-click on desktop and long-press on mobile devices. The long-press duration is set to 500ms by default.

## Styling

The circular menu is styled to match the NasaCircle design language. Each menu item has a hover effect and smooth animations when appearing.

## Accessibility

The circular menu is designed to be accessible, with appropriate keyboard navigation and screen reader support. Menu items have clear visual indicators and labels.