# Lost and Found

A simple contact form for reporting a lost item. Fill in your name, phone number, and a description, and the page confirms your submission.

## Files

- **lost.html** - the page structure: an image, the form fields (name, phone, description), a submit button, and a response area.
- **main.js** - validates the form on submit, builds a `Lost` object from the entered data, shows a confirmation message, and clears the fields.
- **styles.css** - page layout and styling.
- **Images/LostAndFoundImage.jpg** - the header image shown at the top of the page.

## What it does

1. You fill in your name, phone number, and a description of the lost item.
2. Clicking Submit checks that all three fields have something in them. If any are empty, an alert asks you to fill out the form completely.
3. If everything's filled in, a `Lost` object is created from the entered values, and a message appears confirming that someone will call you within one business day, addressed using your first name.
4. The form fields are cleared, ready for another submission.

## Requirements

- Just a browser, no build step or server needed.

## Usage

Open `lost.html` directly in a browser, or serve the folder locally, for example:

```
python3 -m http.server
```

Then visit `http://localhost:8000/lost.html`.

## Notes

- This is a front-end only demo, submitting the form doesn't send the data anywhere (no backend or email integration), it just displays a confirmation message on the page.
