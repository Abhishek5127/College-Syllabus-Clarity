export const department = {
    id: "bca",
    name: "BCA",
    tagline: "Computing foundations with applied software practice.",
    semesters: [
      {
        id: "1",
        label: "Semester I",
        focus: "Programming basics, digital literacy, and math.",
        subjects: [
          "Computer Architecture",
          "C Programming",
          "Operating Systems",
        ],
        subjectDetails: {
          "Computer Architecture": {
            code: "BCA-102",
            title: "Computer Architecture",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Binary systems and combinational logic.",
                  "Digital computers and digital systems, binary numbers, number base conversion, octal and hexadecimal numbers, subtraction using r's and r-1 complements, binary code, binary storage and registers, binary logic, integrated circuits.",
                  "Axiomatic definition of Boolean algebra, basic theorems and properties of Boolean algebra, Boolean functions, canonical and standard forms, other logic operations, digital logic gates, the map method, two- and three-variable maps, four-variable map.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Arithmetic circuits and sequential logic.",
                  "Logic gates NAND and NOR implementation, other two-level implementations, don't care conditions.",
                  "Introduction, adders, subtractors, binary parallel adder, decimal adder, magnitude comparator, decoders, multiplexers.",
                  "BOOTH algorithm for signed numbers with example.",
                  "Sequential logic: introduction, different types of flip-flops, triggering of flip-flops, Boolean algebra, combinational circuits, circuit simplification, sequential circuits.",
                  "Machine instruction: memory locations and addresses, memory operations, instructions and instruction sequencing, addressing modes.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Assembly language and input/output organization and the memory system.",
                  "Basics of assembly language program, examples from assembly language programming, accessing I/O devices.",
                  "Interrupts, enabling and disabling interrupts, handling multiple devices, controlling input/output device behavior.",
                  "Exceptions, DMA, buses.",
                  "Basic concepts, semiconductor RAM memories, internal organization of memory chips, static memories, dynamic RAM, synchronous D-RAM, structure of larger memories, read-only memories, speed, size, and cost.",
                  "Cache memories, virtual memories, memory management requirements.",
                ],
              },
            ],
          },
          "C Programming": {
            code: "BCA-103",
            title: "C Programming",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Overview of C language: character set, C tokens, identifiers, keywords, data types, variables, constants, symbolic constants, operators in C, hierarchy of operators, expressions.",
                  "Managing input and output operations: formatted and unformatted I/O functions.",
                  "Decision making, branching and looping: if statement, if-else statement, nesting of if-else statements, else-if ladder, switch statement, ternary operator.",
                  "Looping: while, do-while, for loop, nested loop, break, continue, and goto statements.",
                  "Functions: function definition, prototyping, types of functions, passing arguments to functions, nested functions, recursive functions.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Arrays: declaring and initializing, one dimensional arrays, two dimensional arrays, multi-dimensional arrays, passing arrays to functions.",
                  "Strings: declaring and initializing strings, operations on strings, arrays of strings, passing strings to functions.",
                  "Storage classes: automatic, external, static and register variables.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Structures: declaring and initializing, nested structure, array of structure, passing structures to functions.",
                  "Unions, typedef, enum, bit fields.",
                  "Pointers: declarations, pointer arithmetic, pointers and functions, call by value, call by reference.",
                  "Pointers and arrays, arrays of pointers, pointers and structures.",
                  "Meaning of static and dynamic memory allocation, memory allocation functions, infix, prefix, postfix.",
                ],
              },
            ],
          },
          "Operating Systems": {
            code: "BCA-104",
            title: "Operating Systems",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Introduction to operating systems, goals of OS, operation of OS, resource allocator and related functions, classes of OS, batch processing, multi-processing, time sharing, distributed, real time systems, system calls, system programs.",
                  "Process concept, interacting process, threads, fundamentals of scheduling, scheduling criteria, long medium short term scheduling, scheduling algorithms, structure of concurrent system, critical section, critical region, inter-process communication, monitor and semaphores, implementation and uses.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Logical versus physical address, swapping, contiguous allocation, segmentation, paging, segmentation with paging, kernel memory allocation, page replacement algorithm, virtual memory, virtual memory with paging, demand paging, dead lock, characterization, methods for handling dead locks, prevention, avoidance, thrashing, allocation of frame, virtual memory using segmentation.",
                  "Files and directories: file concept, file types, file system structure, file metadata, inodes, kernel support for file, system calls for file I/O operations: open, create, read, write, close, lseek, dup2.",
                  "File status information, fstat family, file and record locking, fcntl function, file permissions (chmod, fchmod), file ownership (chown, lchown, fchown).",
                  "Links: soft links and hard links, symlink, link, unlink.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Directories: creating, removing and changing directories (mkdir, rmdir, chdir), obtaining current working directory (getcwd).",
                  "Directory contents, scanning directories (opendir, readdir, closedir, rewinddir functions).",
                  "Process: process concept, process environment, environment list, environment variables, getenv, setenv, system call interface for process management (fork, vfork, exit, wait, waitpid, exec family).",
                  "Shell programming with Bourne Again shell (bash): introduction, shell responsibilities, pipes and redirection, here documents, running a shell script, the shell as a programming language, shell meta characters, file name substitution, shell variables, command substitutions, shell commands.",
                  "The environment, quoting, test command, control structures, arithmetic in shell, shell script examples, interrupt processing, functions, debugging shell scripts.",
                ],
              },
            ],
          },
        },
        outcomes: [
          "Write structured programs with core control flow.",
          "Understand binary representation and computer hardware basics.",
          "Apply foundational calculus and discrete math ideas.",
        ],
        assessments: ["Lab Practicals", "Unit Tests", "Midterm Exam", "Final Exam"],
      },
      {
        id: "2",
        label: "Semester II",
        focus: "Data handling, web basics, and problem solving.",
        subjects: [
          "English Communication Skill / Hindi Communication Skill / Rajasthani Communication Skill",
          "Discrete Mathematics",
          "Data Structures Using C++",
          "Database Technology",
        ],
        subjectDetails: {
          "English Communication Skill / Hindi Communication Skill / Rajasthani Communication Skill": {
            code: "BCA-201",
            title: "Communication Skill",
            units: [
              {
                title: "Unit 1",
                topics: ["Syllabus will be as provided by the university."],
              },
              {
                title: "Unit 2",
                topics: ["Syllabus will be as provided by the university."],
              },
              {
                title: "Unit 3",
                topics: ["Syllabus will be as provided by the university."],
              },
            ],
          },
          "Discrete Mathematics": {
            code: "BCA-202",
            title: "Discrete Mathematics",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Sets: definition and types, set operations, partition of set, cardinality, recursive definition of set.",
                  "Functions: concept, special functions (polynomial, exponential and logarithmic, absolute value, floor and ceiling, mod and div functions), properties of functions, cardinality of infinite set, countable and uncountable set, pigeon hole principle, composition of function.",
                  "Relations: Boolean matrices, binary relation, adjacency matrix of relation, properties of relations, operations of relations, connectivity relation, transitive closure, Warshall algorithm, equivalence relation, equivalence class.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Proof methods: vacuous, trivial, direct, indirect by contrapositive and contradiction, constructive and non-constructive proof, counterexample.",
                  "The division algorithm, divisibility properties (prime numbers and composite numbers), principle of mathematical induction, the second principle of mathematical induction, fundamental theorem of arithmetic.",
                  "Algorithm correctness: partial correctness, loop invariant, testing the partial correctness of linear and binary search, bubble and selection sorting.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Graph theory: graphs, directed, undirected, simple, adjacency and incidence, degree of vertex, sub-graph, complete graph, cycle and wheel graph, bipartite and complete bipartite graph, weighed graph.",
                  "Trees: spanning trees, Kruskal's algorithm, finding spanning tree using depth first search, breadth first search, complexity of graph, minimum spanning tree.",
                ],
              },
            ],
          },
          "Data Structures Using C++": {
            code: "BCA-203",
            title: "Data Structures Using C++",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Classes, objects, encapsulation, polymorphism, inheritance.",
                  "Control structures: control and looping statements.",
                  "Function prototyping, call and return by reference, inline function, default and const arguments.",
                  "Friend functions, friend classes, inline functions, static class members, static data members, static member functions.",
                  "The scope resolution operator, nested classes, passing objects to functions, returning objects, object assignment.",
                  "Arrays, pointers, function overloading, copy constructors and default arguments, operator overloading, inheritance.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Definitions of data structure and algorithm, time and space complexity, algorithm notations.",
                  "Searching: linear and binary. Concept of sorting, sorting algorithms (bubble sort, quick sort, selection sort, merge sort).",
                  "Recursion: factorial, Fibonacci, Tower of Hanoi.",
                  "Linked lists: introduction to linked list and double linked list, representation of linked lists in memory, traversing a linked list, searching linked list, insertion and deletion into linked list, doubly linked lists, traversing a doubly linked list.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Stacks and queues: primitives of stacks, implementation of stacks using array and link list, introduction to queues, properties of queues.",
                  "Trees: definition and basic concepts, linked tree representation, introduction to binary tree, traversing binary trees (pre order, post order and in-order), concept of binary search tree, algorithm of searching, inserting and deleting in binary search trees.",
                  "Graph: introduction to graphs, types of graphs, operation of graph: adjacency matrix.",
                  "Graph traversal: breadth first search, depth first search.",
                ],
              },
            ],
          },
          "Database Technology": {
            code: "BCA-204",
            title: "Database Technology",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Conventional file system, object of database systems, data abstraction, data definition language, data manipulation language, database administrator, database design stages, database model, database system architecture.",
                  "Entity-relationship model, entity, entity set, attributes, tuples, domains, keys, super and candidate key.",
                  "Overview of hierarchical, network and relational models, comparison of network, hierarchical and relational models, file organization.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Relational model: storage organization for relations, relational algebra, set operators, relational operators.",
                  "Decomposition of relation schemes, functional dependencies, normalization up to BCNF.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "MySQL overview: introduction, connecting to and disconnecting from the server, entering queries.",
                  "Creating and using a database, creating and selecting a database, creating a table, loading data into a table.",
                  "Retrieving information from a table, selecting all data, selecting particular rows, selecting particular columns, sorting rows, date calculations, working with NULL values, pattern matching, counting rows, using more than one tables.",
                  "Connecting to a MySQL database, querying the database, retrieving and displaying the results, modifying data, deleting data.",
                ],
              },
            ],
          },
        },
        outcomes: [
          "Implement linear data structures and algorithms.",
          "Explain process, memory, and file management concepts.",
          "Build static web pages with semantic HTML and CSS.",
        ],
        assessments: ["Lab Practicals", "Assignments", "Midterm Exam", "Final Exam"],
      },
      {
        id: "3",
        label: "Semester III",
        focus: "Database design and network fundamentals.",
        subjects: [
          "Financial Accounting",
          "Computer Networks I",
          "Programming in Java",
          "Web Technology II",
          "Mini Project",
        ],
        subjectDetails: {
          "Computer Networks I": {
            code: "BCA-302",
            title: "Computer Networks",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Network concepts, Ethernet, token ring, routers, switches, hubs, bridges, gateways, and Internet basics.",
                  "OSI reference model, TCP/IP layer model, IPv4 addressing, and subnetting basics.",
                  "IPv4 classful addressing, subnet masks, and subnetting practice.",
                  "IPv6 basics, address assignment, unicast/multicast, and special IPv6 addresses.",
                  "Routing configuration concepts, router modes and commands, and internal components.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "IP routing, static and dynamic routing, RIP, EIGRP, and OSPF.",
                  "Access lists: standard and extended.",
                  "NAT concepts, static and dynamic NAT, PAT, and troubleshooting.",
                  "WAN technologies: leased lines, HDLC, PPP, PAP/CHAP configuration.",
                  "VPN basics, frame relay, packet switching, switching operations, and VLAN configuration.",
                  "Spanning tree protocol, switch modes, hub modes, and MAC address configuration.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "NS2/NAM basics, purpose, installation, architecture, and trace files.",
                  "NS2 protocol support, simulation objects, basic syntax, and node creation.",
                  "Running NS2/NAM, invoking external commands, and working with NS2.",
                  "Wired networks: creating links, sending traffic, link parameters, and routing support.",
                ],
              },
            ],
          },
          "Web Technology II": {
            code: "BCA-304",
            title: "Web Programming",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "HTML concepts, versions, syntax, head and body sections.",
                  "Building HTML documents, inserting text, images, hyperlinks, backgrounds, and color controls.",
                  "HTML tags, tables, lists, frames, and forms.",
                  "CSS introduction, style sheet levels, selector forms, and property value forms.",
                  "Font, list, color, and alignment properties, box model, background images, span and div tags, conflict resolution.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "JavaScript overview, object orientation, and syntax characteristics.",
                  "Primitives, operators, expressions, and output.",
                  "Input handling, control statements, objects, arrays, functions, constructors.",
                  "Pattern matching with regular expressions and script errors.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "JavaScript execution environment and the DOM.",
                  "Elements access, event handling, and DOM event model.",
                  "Navigator object, DOM tree traversal, and element modification.",
                  "Positioning, moving, visibility, colors, fonts, dynamic content, stacking elements.",
                  "Mouse events, cursor tracking, and drag-and-drop basics.",
                ],
              },
            ],
          },
          "Programming in Java": {
            code: "BCA-303",
            title: "Programming in Java",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Introducing Data Types and Operators, Java’s Primitive Types, Literals, Variables, operators, Type conversion in Assignments, Cast, Operator Precedence, Expressions.",
                  "Program Control Statements, Input characters from the Keyboard, if statement, Nested ifs, if-else-if Ladder, Switch Statement, Nestedswitch statements, for Loop, Enhanced for Loop, While Loop, do-while Loop, Use break, Use continue, Nested Loops.",
                  "Introduction to Classes, Objects and Methods, Class Fundamentals, Reference Variables and Assignment, Methods, Using Parameters, Constructors, Parameterized Constructors, The new operator.",
                  "Arrays, Multidimensional Arrays, Alternative Array Declaration Syntax, Assigning Array References, Usingthe Length Member, The Bitwise operators.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "String Fundamentals, The String Constructors, Three String-Related Language Features, The Length() Method, Obtaining the characters within a string, String comparison, using indexOf() and last IndexOf(),Changing the case of characters within a string, StringBuffer and StringBuilder.",
                  "Method Overloading, Overloading Constructors, Recursion",
                  "Inheritance Basics, Member Access and Inheritance, Constructors and Inheritance, Using super to CallSuperclass constructors, Using super to Access Superclass Members, Creating a Multilevel Hierarchy",
                  "Interface Fundamentals, Creating an Interface, Implementing an Interface, Using Interface References,Implementing Multiple Interfaces, extending Interfaces",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Package Fundamentals, Packages and Member Access, Importing Packages, Static Import",
                  "The Exception Hierarchy, Exception Handling Fundamentals, using Multiple catch clauses, Catching subclass Exceptions, nested try blocks, Throwing an Exception",
                  "Multithreading fundamentals, The Thread Class and Runnable Interface, Creating Thread, Creating Multiple Threads, Determining When a Thread Ends, Thread Priorities, Synchronization, Thread Communication using notify(), wait() and notifyAll(), suspending, Resuming and stopping Threads.",
                ],
              },
            ],
          },

          "Financial Accounting": {
            code: "BCA-301",
            title: "Financial Accounting",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Fundamentals of Accounting: Meaning of Accounting, its scope; objectives and limitations; Meaning and application of double entry system, Books of Accounts, Journal, Ledgers - Debtors ledger, Creditors ledgers and General ledger; Cash Book",
                  "Depreciation accounting: Meaning of depreciation, Methods of providing depreciation: Straight Line Method, Written-Down Value Method.Depreciation accounting: Meaning of depreciation, Methods of providing depreciation: Straight Line Method, Written-Down Value Method.",
                  "Financial Statements: Meaning and Components of Financial statements, Preparation of Financial Statements, Trading Account, Profit and loss Account, Meaning and Purpose of Balance Sheet, Steps for preparation of Balance Sheet, Marshalling of Balance Sheet, Format of Balance Sheet.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Computerised Accounting System (CAS): Introduction, Components of CAS, and Salient Features, Grouping of accounts, Codification, Advantages and limitations.",
                  "Fundamentals of Tally: Company Features: Creation, Alteration, Deletion of Company, Configuration, Data backup & Data Restore. Import, Migration of Data.",
                  "Accounting Masters in Tally: Groups, Multiple Groups, Ledgers, Multiple Ledgers",
                  "Inventory Masters in Tally: Stock Groups, Multiple Stock Groups, Stock Categories, Multiple Stock Categories, Units of Measure, Stock Items, Multiple Stock Items."
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Vouchers Entries in Tally: Introduction, Types of Vouchers, Chart of Vouchers, Accounting Vouchers, Inventory Vouchers, Stock Journal, Invoicing, Orders- Purchase and Sales Order Vouchers.",
                  "Technological Advantages in Tally: Tally vault, Security controls, Tally Audit, Backup and restore, Split company data, Import and export of data, Printing Reports and Cheques",
                  "Generating Reports in Tally: Financial Statements, Trading Account, Profit & Loss Account, Balance Sheet, Accounts Books and Reports, Inventory Books and Reports, Exception Reports, Statutory Reports, Payroll Reports, Trail balance, Day Book, List of Accounts, Stock Summary, Outstanding Statement"
                ]
              },
            ],
          },
          
        },
      },
      {
        id: "4",
        label: "Semester IV",
        focus: "Software engineering and full-stack foundations.",
        subjects: [
          "Computer Based Statistics",
          "Visual Programming",
          "Android Programming",
          "Design Analysis & Algorithms",
        ],
        subjectDetails: {
          "Computer Based Statistics": {
            code: "BCA-401",
            title: "Computer Based Statistics",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Types and presentation of data, statistical population and data, qualitative and quantitative data.",
                  "Discrete and continuous data, frequency and non-frequency data, geographical and chronological data.",
                  "Primary and secondary data, tabular presentation, data construction of tables, types of tables.",
                  "Frequency distributions: discrete, grouped, continuous, cumulative.",
                  "Graphical presentation: histogram, frequency polygon, frequency curve, ogives, and box-plot.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Statistical analysis of quantitative data: mean, mode, median.",
                  "Types of scales: nominal, ordinal, interval, and ratio.",
                  "Univariate data measures of central tendency, dispersion, moments and computation.",
                  "Absolute and relative measures of skewness and kurtosis based on quantiles and moments.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Curve fitting and theory of attributes: least squares, fitting of straight line, parabola, reducible to straight line, exponential and power curves.",
                  "Class frequency, order of class frequency, ultimate class frequency, consistency of data.",
                  "Independence and association of attributes; measures of association.",
                  "Bivariate data analysis: correlation analysis, scatter diagram.",
                  "Regression analysis: fitting regression lines, regression coefficients and properties.",
                ],
              },
            ],
          },
          "Visual Programming": {
            code: "BCA-402",
            title: "Visual Programming",
            units: [
              {
                title: "Unit 1",
                topics: [
                  ".NET framework features and architecture, CLR, CTS, MSIL, assemblies, and class libraries.",
                  "Variables, data types, scope and lifetime, control flow statements, constants, arrays, collections.",
                  "Subroutines, functions, passing arguments, optional arguments, return values.",
                  "MsgBox/InputBox, overloading, constructors, inheritance, overriding, interfaces.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Working with forms: load, show, hide, control one form within another.",
                  "Common controls: TextBox, Label, Button, ListBox, ComboBox, CheckBox, RadioButton.",
                  "Panel, scroll bar, Timer, ListView, TreeView, ToolBar, StatusBar.",
                  "OpenFileDialog, SaveFileDialog, FontDialog, ColorDialog, PrintDialog.",
                  "LinkLabel, designing menus, context menus, access and shortcut keys.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Database programming with ADO.NET: overview from ADO to ADO.NET.",
                  "Accessing data using Server Explorer.",
                  "Creating connection, command, data adapter, and dataset with OLEDB and SQLDB.",
                ],
              },
            ],
          },
          "Android Programming": {
            code: "BCA-403",
            title: "Android Programming",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Mobile application development, device platforms, and alternatives for building mobile apps.",
                  "Native vs. hybrid applications and Android application lifecycle.",
                  "Mobile application front-end and back-end concepts.",
                  "Obtaining tools, launching Android application, IDE exploration, debugging, and publishing.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Activities and intents, linking activities, fragments, and notifications.",
                  "Screen components and display orientation, managing changes to screen orientation.",
                  "Using the action bar and creating UI programmatically.",
                  "Listening for UI notifications.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Basic views and view usage.",
                  "List and list views, menus, and web views.",
                  "Saving/loading user preferences, persisting data to files.",
                  "Creating and using databases, sharing data, and content providers.",
                  "SMS messaging, sending email, displaying maps.",
                  "Location data, monitoring a location.",
                ],
              },
            ],
          },
          "Design Analysis & Algorithms": {
            code: "BCA-404",
            title: "Design Analysis & Algorithms",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Notion of algorithm and review of asymptotic notations.",
                  "Mathematical analysis of non-recursive and recursive algorithms.",
                  "Brute force approaches: introduction, selection sort, bubble sort, sequential search, brute force string matching.",
                  "Divide and conquer: general method, defective chess board, binary search, merge sort, quick sort and performance.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Greedy method: general method, knapsack problem, job sequencing with deadlines.",
                  "Minimum-cost spanning trees: Prim's algorithm, Kruskal's algorithm.",
                  "Single-source shortest paths.",
                  "Dynamic programming: general method, Warshall's algorithm, Floyd's algorithm.",
                  "All pairs shortest paths, single-source shortest paths.",
                  "General weights, 0/1 knapsack, traveling salesperson problem.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Limitations of algorithmic power and coping with them: lower-bound arguments.",
                  "Decision trees, NP and NP-complete problems, challenges of numerical algorithms.",
                  "Coping with limitations: backtracking (n-queens, Hamiltonian circuit, subset-sum).",
                  "Branch and bound: assignment problem, knapsack problem, traveling salesperson problem.",
                  "Approximation algorithms for NP-hard problems: traveling salesperson, knapsack.",
                ],
              },
            ],
          },
        },
        outcomes: [
          "Apply SDLC models to real software projects.",
          "Build CRUD apps with server-side logic.",
          "Interpret data with visual summaries.",
        ],
        assessments: ["Project Demo", "Case Study", "Midterm Exam", "Final Exam"],
      },
      {
        id: "5",
        label: "Semester V",
        focus: "Specializations and advanced development.",
        subjects: [
          "Internet of Things",
          "Programming in Python",
          "Artificial Intelligence",
          "Computer Graphics",
        ],
        subjectDetails: {
          "Internet of Things": {
            code: "BCA-501",
            title: "Internet of Things",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Introduction to IoT components, characteristics of IoT sensor nodes, edge computer, cloud and peripheral cloud, single board computers, open source hardwares, examples of IoT infrastructure.",
                  "IoT protocols and softwares, MQTT, UDP, MQTT brokers, publish subscribe modes, HTTP, COAP, XMPP and gateway protocols.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "IoT point to point communication technologies, IoT communication pattern, IoT protocol architecture.",
                  "Selection of wireless technologies (6LoWPAN, Zigbee, WiFi, BT, BLE, SIG, NFC, LORA, LiFi, WiDi).",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Introduction to cloud computation and BigData analytics, evolution of cloud computation, commercial clouds and their features, open source IoT platforms, cloud dashboards, introduction to big data analytics and Hadoop.",
                  "IoT security, need for encryption, standard encryption protocol, lightweight cryptography, quadruple, trust model for IoT-A, threat analysis and model for IoT-A, cloud security.",
                  "IoT application and its variants. Case studies: IoT for smart cities, health care, agriculture, smart meters. M2M, web of things, cellular IoT, industrial IoT, Industry 4.0, IoT standards.",
                ],
              },
            ],
          },
          "Programming in Python": {
            code: "BCA-502",
            title: "Programming in Python",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Python basics: keywords, identifiers, indents, input/output basic syntax, variables, dynamic typing, and data types (mutable and immutable).",
                  "Built-in conversion methods.",
                  "Operators: arithmetic, comparison, logical, identity, membership.",
                  "Control statements: conditional (if, if-else, elif, nested if-else), looping (while, for, nested loops), break, continue, pass, range().",
                  "Array: introduction, creation, traverse, insertion, deletion, search, update.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "String: introduction, types, escape sequences, formatting, built-in methods (capitalize, upper, lower, title, find, count, isAlpha(), isDigit(), isLower(), isUpper()), basic operations (accessing, updating, concatenation).",
                  "List & tuple: introduction, accessing, operators, built-in methods (len, max, min, append, insert, remove, pop, reverse, sort, list), basic operations (updating, delete, concatenation, indexing, slicing), regular expressions, list as a stack, list as a queue.",
                  "Set: introduction, accessing, built-in methods (add, update, clear, copy, discard, remove), operations (union, intersection, difference).",
                  "Dictionary: (single dimension) introduction, accessing, updating, deleting, viewing values in dictionaries, built-in methods (len, max, min, pop, clear, items, keys, values, update), sorting and looping, nested dictionaries.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Function: defining, calling, function arguments (required, keyword, default, variable length), anonymous functions, global and local variables, recursion, lambda function.",
                  "Modules: introduction, importing module, built-in modules (math, statistics, random), dir().",
                  "Package: creating, installing, importing modules from the package.",
                  "Errors & exception: introduction of errors & exceptions, error types, exception handling (introduction, try, except, else, finally), raising exceptions, invoked functions.",
                  "File input-output: opening and closing files, file modes, reading and writing files, file types, file position, rename, delete files, directory methods.",
                  "Tuples: creating, utility, accessing values, updating, deleting, basic operations, assignment, returning multiple values, nested values.",
                ],
              },
            ],
          },
          "Artificial Intelligence": {
            code: "BCA-503",
            title: "Artificial Intelligence",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Definition of AI, application of AI, knowledge-based systems, representation of knowledge organization and acquisition of knowledge.",
                  "Syntax and semantics of propositional logic, syntax and semantics of FOPL, conversion to clausal form, inference rule, resolution principles.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Bayesian probabilistic inference, possible word representation, Dempster-Shafer theory, expert system, natural language processing.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Introduction to deep learning, backpropagations algorithm, initialization, deep neural network, introduction of generative adversarial network, Markov decision process, RNN basics, advance RNN, LSTM, GRU, bi directional neural network, shallow neural network.",
                  "Implementation with MATLAB: heuristic search, 8 puzzle problem, missionaries and cannibals problems, water-jug problem, linear problem, block word problem, hill climbing methods and other AI related problems.",
                ],
              },
            ],
          },
          "Computer Graphics": {
            code: "BCA-504",
            title: "Computer Graphics",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Interactive graphics, passive graphics, advantage of interactive graphics, classification of application.",
                  "Point, line, DDA algorithm, Bresenham's line algorithm, circle generating algorithm, polynomial and spline curves algorithms, clipping operation, point, line, Cohen-Sutherland line clipping.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "2D transformation, matrix representation of 2D, composite transformation, translation, rotation, scaling, general pivot-point rotation, general fix scaling, reflection, shear, affine transformations and transformation functions.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Parallel projection, perspective projection, 3D transformation, rotation, scaling, composite transformation, 3D transformation function.",
                ],
              },
            ],
          },
        },
        outcomes: [
          "Deploy applications to cloud platforms.",
          "Build user-centric mobile experiences.",
          "Deliver a scoped product for a real problem.",
        ],
        assessments: ["Project Review", "Viva", "Final Exam"],
      },
      {
        id: "6",
        label: "Semester VI",
        focus: "Research, security, and data-driven computing.",
        subjects: [
          "Research Methodology",
          "Cloud Computing",
          "Data Mining with R",
          "Cyber Security",
        ],
        subjectDetails: {
          "Research Methodology": {
            code: "BCA-601",
            title: "Research Methodology",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Meaning of research, objectives of engineering research, motivation in engineering research, types of engineering research, finding and solving a worthwhile problem.",
                  "Ethics in engineering research practice, types of research misconduct, ethical issues related to authorship.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Teaching-learning process, chalk and talk method, PowerPoint presentation.",
                  "Literature review and technical reading, new and existing knowledge, analysis and synthesis of prior art, bibliographic databases, Web of Science, Google and Google Scholar, effective search: the way forward.",
                  "Introduction to technical reading, conceptualizing research, critical and creative reading, taking notes while reading, reading mathematics and algorithms, reading a datasheet.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Attributions and citations: giving credit wherever due, citations functions and attributes, impact of citations and keywords on citations, knowledge flow through citations, citing datasets, styles for citations, acknowledgments and attributions, what should be acknowledged, acknowledgments in books, dissertations, dedications or acknowledgments.",
                  "Teaching-learning process, chalk and talk method, PowerPoint presentation.",
                  "Introduction to intellectual property: role of IP in economic and cultural development, IP governance, IP as a global indicator of innovation, origin of IP history in India, major amendments in IP laws and acts in India.",
                ],
              },
            ],
          },
          "Cloud Computing": {
            code: "BCA-602",
            title: "Cloud Computing",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Introduction: business and IT perspective, cloud and virtualization, cloud services requirements, cloud and dynamic infrastructure, cloud computing characteristics, cloud adoption.",
                  "Cloud models: cloud characteristics, measured service, cloud models, security in a public cloud, public verses private clouds, cloud infrastructure self-service.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Cloud solutions: cloud ecosystem, cloud business process management, cloud service management, cloud stack, computing on demand, cloud sourcing.",
                  "Cloud offerings: cloud analytics, testing under cloud, information security, virtual desktop infrastructure, storage cloud.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Cloud virtualization technology: virtualization defined, virtualization benefits, server virtualization, hypervisor management software, logical partitioning, VIO server, virtual infrastructure requirements.",
                  "Storage virtualization, storage area networks, network attached storage, cloud server virtualization, virtualized data center.",
                ],
              },
            ],
          },
          "Data Mining with R": {
            code: "BCA-603",
            title: "Data Mining with R",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Introduction to data mining, DM techniques, issues and challenges in DM, applications, association rules, apriori, dynamic itemset counting, FP-tree growth, incremental learning.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Clustering techniques: k-medoid algorithm, hierarchical, categorical clustering algorithm.",
                  "Decision tree, best split, splitting indices and criteria, decision tree construction algorithm, CART, ID3, rain forest, pruning technique.",
                  "Data mining using NN, web mining, temporal and spatial data mining.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Basic elements of R: data input and output, objects, attributes, number, vectors, array, matrix, lists.",
                  "Reading data from files, control statements, loops, functions, R scripts, data science overviews, data visualization using graphics in R.",
                  "Ggplot2, file format of graphics output, introduction to hypothesis, types of hypothesis, data sampling, confidence and significance level, hypothesis tests, parametric test, non-parametric test.",
                ],
              },
            ],
          },
          "Cyber Security": {
            code: "BCA-604",
            title: "Cyber Security",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Cyber security: layers of security, vulnerability, assets and threat, challenges and constraints, computer criminals, CIA triad, motive of attackers, spectrum of attacks, taxonomy of various attacks, cryptography.",
                  "Security governance: challenges and constraints, security models and risk management, legacy cyber security systems, transformations in cyber security.",
                  "Cyber security technologies, mobile security, advanced data security, cloud security, IoT security.",
                  "Incident detection response, penetration testing, user behavior analytics (UBA), endpoint detection and response (EDR).",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "Vulnerabilities and safeguards: software vulnerabilities, complex network architectures, open access to organizational data, weak authentication, poor cyber security awareness.",
                  "Cyber security safeguards: overview, access control, audit, authentication, biometrics, deception, denial of service filters, ethical hacking, firewalls, scanning, security policy, threat management, defending malicious software, applying software update and patches.",
                  "Securing infrastructure and local host infrastructure security in the real world and challenges: understanding access control and monitoring systems, access control security policies, physical security controls.",
                  "Intrusion detection and reporting systems, securing host device and challenges, protecting the inner perimeter, protecting remote access, local protection tools, local intrusion detection tools, configuring browser security, hardening operating systems.",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Cyber security tools: Zenmap, Hydra, Kismet, John the Ripper, Airgeddon, Deauther Board, Aircrack-ng, EvilOSX.",
                  "Cyber security strategies: need for building cyber strategy, cyber-attack strategies (red team), cyber defense strategies (blue team).",
                  "Introduction to cyber security kill chain: reconnaissance, weaponization, privilege escalation, exfiltration.",
                  "Threat life cycle management phases.",
                ],
              },
            ],
          },
        },
        outcomes: [
          "Design and document research and IP awareness.",
          "Apply cloud and data mining concepts to real datasets.",
          "Analyze and respond to cyber security risks.",
        ],
        assessments: ["Assignments", "Midterm Exam", "Final Exam", "Viva"],
      },
    ],
  }
