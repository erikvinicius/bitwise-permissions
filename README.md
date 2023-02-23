# bitwise-permissions

### Operators

| Example             | Operator | Name | Description                    |
|---------------------|----------|------|--------------------------------|
| 1100 & 0100 = 0100  | &        | AND  | Sets bit to 1 if both are 1    |
| 1100 \| 1000 = 1100 | \|       | OR   | Sets bit to 1 if one is 1      |
| 0100 1010 = 1110    | ^        | XOR  | Sets bit to 1 if only one is 1 |
| 1100 \| 1000 = 1100 | ~        | NOT  | Invert each bit                |

### Examples

```
//How to manage a user's permissions

let Naveen = DEFAULT;
Naveen |= PARK; // add permission
Naveen ^= LABORATORY; // toggle permission
Naveen &= (~PARK); // remove permission
console.log(Naveen);  // 0011 (DEFAULT and LABORATORY)
```
You can learn more in this topic. [dev.to](https://dev.to/jannisdev/build-a-bitwise-permission-system-ocl)
