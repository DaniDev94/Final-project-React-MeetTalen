import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
brand: {
    primary: '#890620',
    secundary: '#B5B2B2',
    accent: '#8380B6',
    buttonColor: 'rgb (255, 255, 255)',
    buttonHover: '#000000'
},
};

const Button = {
    baseStyle: {
        fontWeight: 'light'
    },
    sizes: {
        lg:{
        fontWeight: 'bold',
        borderRadius: '30px'
        },
        xl:{
        fontWeight: 'bold',
        _hover: {
        boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.18)'
        }
        }
    },
    variants: {
        ghost:{
        color: 'brand.buttonColor',
        fontWeight: 'light',
        _hover: {
        color: 'brand.buttonHover',
        fontWeight: 'bold',            
        // fontWeight: 'bold'
        // bg: 'brand.accent',
        // display: 'none'
        }
        }
    }
}
const Icon = {
    color: 'white'
}

export const theme = extendTheme({ colors, components: { Button, Icon} })