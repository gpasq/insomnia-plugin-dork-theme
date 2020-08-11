module.exports = {
    name: 'dork-light',
    displayName: 'Dork (light)',
    theme: {
        background: {
            default: '#eceff4',
            success: '#17406A',
            notice: '#3B86D4',
            warning: '#CEA744',
            danger: '#CE6086',
            surprise: '#7F3C7F',
            info: "#3295B1"
        },
        foreground: {
            default: '#2e3440',
            info: '#3B86D4'
        },
        styles: {
            transparentOverlay: {
                background: {
                    default: 'rgba(236, 239, 244, 0.8)'
                },
                foreground: {
                    default: '#d8dee9'
                }
            },
            dialog: {
                background: {
                    default: '#e5e9f0'
                },
                foreground: {
                    default: '#2e3440'
                }
            },
            sidebar: {
                background: {
                    default: '#eceff4',
                    success: '#17406A',
                    notice: '#434c5e',
                    warning: '#CEA744',
                    danger: '#CE6086',
                    surprise: '#7F3C7F',
                    info: '#3295B1'
                },
                foreground: {
                    default: '#3b4252'
                },
                highlight: {
                    default: '#17406A'      // Sidebar general text
                }
            },
            sidebarHeader: {
                background: {
                    default: '#d8dee9'
                },
                foreground: {
                    default: '#4c566a'
                }
            },
            paneHeader: {
                foreground: {
                    default: '#e5e9f0',
                    info: '#434c5e'
                },
                background: {
                    default: '#2e3440',
                    success: '#58965C',
                    notice: '#81a1c1',
                    warning: '#DAAE52',
                    danger: '#bf616a',
                    surprise: '#b48ead',
                    info: '#eceff4'
                }
            },
            pane: {                         // Input/Output pane
                background: {
                    default: '#eceff4',
                    success: '#17406A',     // item name
                    notice: '#3B86D4',      // string value
                    warning: '#CEA744',
                    danger: '#CE6086',
                    surprise: '#7F3C7F',    // number/boolean values
                    info: "#3295B1"
                },
                foreground: {
                    default: '#2e3440',
                    info: '#eceff4'
                },
                highlight: {
                    default: '#3b4252'
                }
            }
        }
    }
}