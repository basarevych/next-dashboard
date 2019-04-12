## Form declaration

```
  {
    fieldName: {
      label: 'translation key',

      // happens on change, optional:
      normalize: 'rule1:param1:param2|rule2:param1:param2|...',

      // happens on blur, optional:
      transform: 'rule1:param1:param2|rule2:param1:param2|...',

      // happens on change, shown on blur, optional:
      validate: 'rule1:param1:param2|rule2:param1:param2|...',
    }
 }
```

- Escape character is backslash (which should be itself escaped in JavaScript):

  ```
  validate: 're:[\\:\\|]+:g|password'
  ```

- Custom validation error message for the rule could be specified like this:

  ```
  validate: "!CUSTOM_MESSAGE_KEY:rule1:param1:param2"
  ```

## Normalization and transfromation rules:

- **trim**

  remove white space from the beginning and the end of value

- **compact:spaces**

  replace multiple occurences of space in a row with a single space

- **remove:spaces**

  remove spaces

- **rows:size**

  forces "size" number of rows (1 if size is omitted)

- **integer**

  removes everything except digits

- **phone**

  forces international phone phormat

- **email**

  normalizes email

- **credit_card:number**

  normalizes credit card number

- **credit_card:date**

  normalizes credit card expiration date

- **credit_card:secret**

  normalizes credit card CVV2 code

## Validation rules:

- **re:regexp:flags**

  value should match the regular expression "regexp", second param is optional flags

- **required**

  value is required

- **required:otherField**

  value is required if otherField is not empty

- **phone**

  value is a phone number

- **email**

  value is an email

- **password:length**

  value is a password of "length" characters (6 if omitted)

- **credit_card:number**

  value is credit a card number

- **credit_card:date**

  value is a credit card expiration date

- **credit_card:secret**

  value is a credit card CVV2 code

- **match:otherField**

  value should be the same as the value of otherField
