import React from "react";
// import NavBar from "../components/Navbar/NavBar";
// import Footer from "../components/Footer";

const OracleDBASyllabus = () => {
  return (
    <>
      {/* <NavBar /> */}
      <br />
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-blue-500 text-3xl font-bold mb-4">
            Oracle DBA Syllabus
          </h1>

          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Exploring the Oracle Database Architecture
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>List the architectural components of Oracle Database</li>
            <li>Explain the memory structures</li>
            <li>Describe the background processes</li>
            <li>
              Explain the relationship between logical and physical storage
              structures
            </li>
          </ul>
          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Oracle Database Management Tools
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Use database management tools</li>
          </ul>
          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Oracle Database Instance
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Understand initialization parameter files</li>
            <li>Start up and shut down an Oracle database instance</li>
            <li>View the alert log and access dynamic performance views</li>
          </ul>
          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Configuring the Oracle Network Environment
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Configure Oracle Net Services</li>
            <li>Use tools for configuring and managing the Oracle network</li>
            <li>Configure client-side network</li>
            <li>Configure communication between databases</li>
          </ul>
          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Managing Database Storage Structures
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Describe the storage of table row data in blocks</li>
            <li>Create and manage tablespaces</li>
          </ul>
          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Administering User Security
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Create and manage database user accounts</li>
            <li>Grant and revoke privileges</li>
            <li>Create and manage roles</li>
            <li>Create and manage profiles</li>
          </ul>
          <h3 className="text-blue-500 font-bold mb-4">◆ Managing Space</h3>
          <ul className="list-disc ml-8 mb-4">
            <li>
              Explain how Oracle database server automatically manages space
            </li>
            <li>Save space by using compression</li>
            <li>Proactively monitor and manage tablespace space usage</li>
            <li>Use the Segment Advisor</li>
            <li>
              Reclaim wasted space from tables and indexes by using the segment
              shrink functionality
            </li>
            <li>Manage resumable space allocation</li>
          </ul>
          <h3 className="text-blue-500 font-bold mb-4">◆ Managing Undo Data</h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Explain DML and undo data generation</li>
            <li>Monitor and administer undo data</li>
            <li>Describe the difference between undo data and redo data</li>
            <li>Configure undo retention</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Managing Data Concurrency
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>
              Describe the locking mechanism and how Oracle manages data
              concurrency
            </li>
            <li>Monitor and resolve locking conflicts</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Implementing Oracle Database Auditing
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Explain DBA responsibilities for security and auditing</li>
            <li>Enable standard database auditing and unified auditing</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Backup and Recovery Concepts
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>
              Identify the importance of checkpoints, redo log files, and
              archive log files
            </li>
          </ul>
          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Backup and Recovery Configuration
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Configure the fast recovery area</li>
            <li>Configure ARCHIVELOG mode</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Performing Database Backups
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Create consistent database backups</li>
            <li>Backup your database without shutting it down</li>
            <li>Create incremental backups</li>
            <li>Automate database backups</li>
            <li>Manage backups</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Performing Database Recovery
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Determine the need for performing recovery</li>
            <li>
              Use Recovery Manager (RMAN) and the Data Recovery Advisor to
              perform recovery of the control file, redo log file, and data file
            </li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">◆ Moving Data</h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Describe ways to move data</li>
            <li>Use SQL*Loader to load data from a non-Oracle database</li>
            <li>
              Use external tables to move data via platform-independent files
            </li>
            <li>Explain the general architecture of Oracle Data Pump</li>
            <li>
              Use Data Pump Export and Import to move data between Oracle
              databases
            </li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Performing Database Maintenance
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Manage the Automatic Workload Repository (AWR)</li>
            <li>Use the Automatic Database Diagnostic Monitor (ADDM)</li>
            <li>Describe and use the advisory framework</li>
            <li>Set alert thresholds</li>
            <li>User server-generated alerts</li>
            <li>Use automated tasks</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Managing Performance
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Use Automatic Memory Management</li>
            <li>Use the Memory Advisor to size memory buffers</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Managing Performance: SQL Tuning
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Manage optimizer statistics</li>
            <li>Use the SQL Tuning advisor</li>
            <li>Use the SQL Access Advisor to tune a workload</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Managing Resources Using Database Resource Manager
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Configure the Database Resource Manager</li>
            <li>Access and create resource plans</li>
            <li>Monitor the Resource Manager</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Automating Tasks by Using Oracle Scheduler
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Use Oracle Scheduler to simplify management tasks</li>
            <li>Use job chains to perform a series of related tasks</li>
            <li>Use Scheduler jobs on remote systems</li>
            <li>Use advanced Scheduler features to prioritize jobs.</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            ◆ Installing, Upgrading and Patching the Oracle Database
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Oracle Software Installation Basics</li>
            <li>Plan for an Oracle Database software installation</li>
            <li>
              Installing Oracle Grid Infrastructure for a Standalone Server
            </li>
            <li>
              Configure storage for Oracle Automatic Storage Management (ASM)
            </li>
            <li>Install Oracle Grid Infrastructure for a standalone server</li>
            <li>Installing Oracle Database Software</li>
            <li>Install the Oracle Database software</li>
            <li>Creating an Oracle Database Using DBCA</li>
            <li>
              Create a database by using the Database Configuration Assistant
              (DBCA)
            </li>
            <li>Generate database creation scripts by using DBCA</li>
            <li>Manage database design templates by using DBCA</li>
            <li>Configure database options by using DBCA</li>
            <li>Using Oracle Restart</li>
            <li>Use Oracle Restart to manage components</li>
            <li>Upgrading Oracle Database Software</li>
            <li>Describe upgrade methods</li>
            <li>Describe data migration methods</li>
            <li>Describe the upgrade process</li>
            <li>Preparing to Upgrade to Oracle Database 19c</li>
            <li>
              Describe upgrade requirements when certain features or options are
              used in Oracle Database
            </li>
            <li>
              Use the pre-upgrade information tool before performing an upgrade
            </li>
            <li>Prepare the new Oracle home prior to performing an upgrade</li>
            <li>Upgrading to Oracle Database 19c</li>
            <li>
              Upgrade the database to Oracle Database 19c by using the Database
              Upgrade Assistant (DBUA)
            </li>
            <li>
              Perform a manual upgrade to Oracle Database 19c by using scripts
              and tools
            </li>
            <li>Performing Post-Upgrade Tasks</li>
            <li>Migrate to unified auditing</li>
            <li>Perform post-upgrade tasks</li>
            <li>Migrating Data by Using Oracle Data Pump</li>
          </ul>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default OracleDBASyllabus;
