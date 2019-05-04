import Typography from "typography"
import wpTheme from "typography-theme-wordpress-2012"
import CodePlugin from 'typography-plugin-code'

wpTheme.plugins = [
      new CodePlugin(),
]

const typography = new Typography(wpTheme)


export default typography
export const rhythm = typography.rhythm
