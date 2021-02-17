import React from "react"

import { Sidebar } from "../Components"
import {
  MdNotifications,
  MdAccountCircle,
  MdExplore,
  // MdPersonAdd,
  MdHome,
  MdSettings,
} from "react-icons/md"

export default function SidebarContainer() {
  return (
    <Sidebar>
      <Sidebar.Item to="/home/feed">
        <Sidebar.Title>
          <Sidebar.Icon>
            <MdHome />
          </Sidebar.Icon>
          <Sidebar.Text>Feed</Sidebar.Text>
        </Sidebar.Title>
      </Sidebar.Item>

      <Sidebar.Item to="/home/profile">
        <Sidebar.Title>
          <Sidebar.Icon>
            <MdAccountCircle />
          </Sidebar.Icon>
          <Sidebar.Text>Profile</Sidebar.Text>
        </Sidebar.Title>
      </Sidebar.Item>

      <Sidebar.Item to="/home/explore">
        <Sidebar.Title>
          <Sidebar.Icon>
            <MdExplore />
          </Sidebar.Icon>
          <Sidebar.Text>Explore</Sidebar.Text>
        </Sidebar.Title>
      </Sidebar.Item>

      <Sidebar.Item to="/home/notifications">
        <Sidebar.Title>
          <Sidebar.Icon>
            <MdNotifications />
          </Sidebar.Icon>
          <Sidebar.Text>Notifications</Sidebar.Text>
        </Sidebar.Title>
      </Sidebar.Item>

      {/* <Sidebar.Item to="/home/requests">
        <Sidebar.Title>
          <Sidebar.Icon>
            <MdPersonAdd />
          </Sidebar.Icon>
          <Sidebar.Text>Requests</Sidebar.Text>
        </Sidebar.Title>
      </Sidebar.Item> */}

      <Sidebar.Item to="/home/settings">
        <Sidebar.Title>
          <Sidebar.Icon>
            <MdSettings />
          </Sidebar.Icon>
          <Sidebar.Text>Settings</Sidebar.Text>
        </Sidebar.Title>
      </Sidebar.Item>

      <Sidebar.Item to="/">
        <Sidebar.Title>
          <Sidebar.Icon></Sidebar.Icon>
          <Sidebar.Text>Landing</Sidebar.Text>
        </Sidebar.Title>
      </Sidebar.Item>
    </Sidebar>
  )
}
