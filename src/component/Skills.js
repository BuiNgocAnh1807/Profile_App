import React from 'react'
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaSass } from 'react-icons/fa'
export default function Skills() {
  return (
    <>
        <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">Programming Languages & Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><FaHtml5/></li>
                        <li class="list-inline-item"><FaCss3/></li>
                        <li class="list-inline-item"><FaJsSquare/></li>
                        <li class="list-inline-item"><FaReact/></li>
                        <li class="list-inline-item"><FaSass/></li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
    </>
  )
}
