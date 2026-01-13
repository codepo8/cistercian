# Cistercian Numerals generator

If all you want to do is convert numbers to [Cistercian numerals](https://en.wikipedia.org/wiki/Cistercian_numerals), check out the [generator page]() which allows you to convert numbers to SVG or Canvas/PNG. 

You can also check out the snazzy [Cistercian Clock]() to impress friends and family. 

If you want to use this in your own products, there are two options:

## toCistercian.js - Node or browser number to Cistercian numeral converted in SVG

You can use this on the command line using: 

```
node toCistercian.js {number}
```

For example `node toCistercian,js 161` results in the following SVG:

```xml
<svg width="120" height="180" xmlns="http://www.w3.org/2000/svg">
    <title>Cistercian numeral for 161</title>
    <line x1="60" y1="20" x2="60" y2="160" stroke="#000" stroke-linecap="square" stroke-width="4"/>
    <line x1="60" y1="20" x2="100" y2="20" stroke="#000" stroke-linecap="square" stroke-width="4"/>
    <line x1="60" y1="20" x2="60" y2="160" stroke="#000" stroke-linecap="square" stroke-width="4"/>
    <line x1="20" y1="20" x2="20" y2="60" stroke="#000" stroke-linecap="square" stroke-width="4"/>
    <line x1="60" y1="20" x2="60" y2="160" stroke="#000" stroke-linecap="square" stroke-width="4"/>
    <line x1="100" y1="160" x2="60" y2="160" stroke="#000" stroke-linecap="square" stroke-width="4"/>
</svg>
```
