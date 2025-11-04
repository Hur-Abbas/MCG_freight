import React, { useState } from "react";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>About</div>
  )
}

export default About
