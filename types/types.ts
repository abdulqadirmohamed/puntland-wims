export type TSideBarItems = {
    title: string
    path: string
    icon?: JSX.Element
    // subMenu?: boolean
    subMenuItems?: TSideBarItems[]
}

export type TData = {
    id: string
    name: string
    w_status: string
    water_total: number
    created_at: string
    data: TData[]
  }