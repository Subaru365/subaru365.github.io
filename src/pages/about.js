import React from 'react'

import Layout from '../components/layout'

export default () => (
  <Layout>
    <h1>About</h1>

    <h2>@Subaru365</h2>
    <ul>
      <li>Name: Akira Murata</li>
      <li>Age: 25</li>
      <li>Address: Tokyo, Japan</li>
    </ul>

    <h2>Experience</h2>
    <ul>
      <li>[2014/11 - 2016/02] INASE Inc.
        <ul>
          <li>Backend API Engineer</li>
          <li>AWS, PHP(fuelPHP), Python</li>
        </ul>
      </li>
      <li>[2016/06 - 2017/06] Freelancer
        <ul>
          <li>Backend Engineer, IT Consultant</li>
          <li>AWS, Node.js, Go, Blockchain(Hyperledger)</li>
        </ul>
      </li>
      <li>[2017/07 - Present] D.A.Consortium Inc.
        <ul>
          <li>System Engineer, SRE</li>
          <li>AWS, GCP, kubernetes, Terraform</li>
        </ul>
      </li>
    </ul>
  </Layout>
)
