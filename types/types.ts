export type TSideBarItems = {
    title: string
    path: string
    icon?: JSX.Element
    // subMenu?: boolean
    subMenuItems?: TSideBarItems[]
}