import type { DataField, GeneratedData } from "./types"

// Helper function to get a random item from an array
function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

// Helper function to generate a random number between min and max
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Helper function to generate a random date between start and end
function getRandomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

// Data sets for generating fake data
const firstNames = [
  "James",
  "Mary",
  "John",
  "Patricia",
  "Robert",
  "Jennifer",
  "Michael",
  "Linda",
  "William",
  "Elizabeth",
  "David",
  "Barbara",
  "Richard",
  "Susan",
  "Joseph",
  "Jessica",
  "Thomas",
  "Sarah",
  "Charles",
  "Karen",
  "Christopher",
  "Nancy",
  "Daniel",
  "Lisa",
  "Matthew",
  "Margaret",
  "Anthony",
  "Betty",
  "Mark",
  "Sandra",
  "Donald",
  "Ashley",
  "Steven",
  "Dorothy",
  "Paul",
  "Kimberly",
  "Andrew",
  "Emily",
  "Joshua",
  "Donna",
  "Kenneth",
  "Michelle",
  "Kevin",
  "Carol",
  "Brian",
  "Amanda",
  "George",
  "Melissa",
  "Edward",
  "Deborah",
  "Ronald",
  "Stephanie",
  "Timothy",
  "Rebecca",
  "Jason",
  "Laura",
  "Jeffrey",
  "Sharon",
  "Ryan",
  "Cynthia",
  "Jacob",
  "Kathleen",
  "Gary",
  "Amy",
  "Nicholas",
  "Shirley",
  "Eric",
  "Angela",
  "Jonathan",
  "Helen",
  "Stephen",
  "Anna",
  "Larry",
  "Brenda",
  "Justin",
  "Pamela",
  "Scott",
  "Nicole",
  "Brandon",
  "Samantha",
  "Benjamin",
  "Katherine",
  "Samuel",
  "Emma",
  "Gregory",
  "Ruth",
  "Frank",
  "Christine",
  "Alexander",
  "Catherine",
  "Raymond",
  "Debra",
  "Patrick",
  "Rachel",
  "Jack",
  "Carolyn",
  "Dennis",
  "Janet",
  "Jerry",
  "Virginia",
  "Tyler",
  "Maria",
  "Aaron",
  "Heather",
  "Jose",
  "Diane",
  "Adam",
  "Julie",
  "Nathan",
  "Joyce",
  "Henry",
  "Victoria",
  "Douglas",
  "Kelly",
  "Zachary",
  "Christina",
  "Peter",
  "Lauren",
  "Kyle",
  "Joan",
  "Walter",
  "Evelyn",
  "Ethan",
  "Olivia",
  "Jeremy",
  "Judith",
  "Harold",
  "Megan",
  "Keith",
  "Cheryl",
  "Christian",
  "Martha",
  "Roger",
  "Andrea",
  "Noah",
  "Frances",
  "Gerald",
  "Hannah",
  "Carl",
  "Jacqueline",
  "Terry",
  "Ann",
  "Sean",
  "Jean",
  "Austin",
  "Alice",
  "Arthur",
  "Kathryn",
  "Lawrence",
  "Gloria",
  "Jesse",
  "Teresa",
  "Dylan",
  "Sara",
  "Bryan",
  "Janice",
  "Joe",
  "Doris",
  "Jordan",
  "Madison",
  "Billy",
  "Julia",
  "Bruce",
  "Grace",
  "Albert",
  "Judy",
  "Willie",
  "Abigail",
  "Gabriel",
  "Marie",
  "Logan",
  "Denise",
  "Alan",
  "Beverly",
  "Juan",
  "Amber",
  "Wayne",
  "Theresa",
  "Roy",
  "Marilyn",
  "Ralph",
  "Danielle",
  "Randy",
  "Diana",
  "Eugene",
  "Brittany",
  "Vincent",
  "Natalie",
  "Russell",
  "Sophia",
  "Elijah",
  "Rose",
  "Louis",
  "Isabella",
  "Bobby",
  "Alexis",
  "Philip",
  "Kayla",
]

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Garcia",
  "Martinez",
  "Robinson",
  "Clark",
  "Rodriguez",
  "Lewis",
  "Lee",
  "Walker",
  "Hall",
  "Allen",
  "Young",
  "Hernandez",
  "King",
  "Wright",
  "Lopez",
  "Hill",
  "Scott",
  "Green",
  "Adams",
  "Baker",
  "Gonzalez",
  "Nelson",
  "Carter",
  "Mitchell",
  "Perez",
  "Roberts",
  "Turner",
  "Phillips",
  "Campbell",
  "Parker",
  "Evans",
  "Edwards",
  "Collins",
  "Stewart",
  "Sanchez",
  "Morris",
  "Rogers",
  "Reed",
  "Cook",
  "Morgan",
  "Bell",
  "Murphy",
  "Bailey",
  "Rivera",
  "Cooper",
  "Richardson",
  "Cox",
  "Howard",
  "Ward",
  "Torres",
  "Peterson",
  "Gray",
  "Ramirez",
  "James",
  "Watson",
  "Brooks",
  "Kelly",
  "Sanders",
  "Price",
  "Bennett",
  "Wood",
  "Barnes",
  "Ross",
  "Henderson",
  "Coleman",
  "Jenkins",
  "Perry",
  "Powell",
  "Long",
  "Patterson",
  "Hughes",
  "Flores",
  "Washington",
  "Butler",
  "Simmons",
  "Foster",
  "Gonzales",
  "Bryant",
  "Alexander",
  "Russell",
  "Griffin",
  "Diaz",
  "Hayes",
]

const domains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "mail.com",
  "aol.com",
  "protonmail.com",
  "example.com",
  "company.com",
]

const streets = [
  "Main St",
  "Oak St",
  "Maple Ave",
  "Washington St",
  "Park Ave",
  "Elm St",
  "Lake St",
  "Pine St",
  "Cedar St",
  "Hill St",
  "River Rd",
  "Church St",
  "High St",
  "Meadow Ln",
  "Valley Rd",
  "Highland Ave",
  "Forest Ave",
  "Broadway",
  "Center St",
  "Sunset Dr",
  "Lincoln Ave",
  "Jackson St",
  "Jefferson St",
  "Madison Ave",
  "Adams St",
  "Franklin St",
  "Monroe St",
  "Grant St",
  "Wilson St",
  "Taylor St",
]

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "Indianapolis",
  "Charlotte",
  "San Francisco",
  "Seattle",
  "Denver",
  "Washington",
  "Boston",
  "Nashville",
  "Baltimore",
  "Oklahoma City",
  "Louisville",
  "Portland",
  "Las Vegas",
  "Milwaukee",
  "Albuquerque",
  "Tucson",
]

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Japan",
  "China",
  "Brazil",
  "Mexico",
  "India",
  "South Korea",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Switzerland",
  "Ireland",
  "New Zealand",
  "Singapore",
  "South Africa",
  "Argentina",
]

const companies = [
  "Acme Inc",
  "Globex Corporation",
  "Soylent Corp",
  "Initech",
  "Umbrella Corporation",
  "Stark Industries",
  "Wayne Enterprises",
  "Cyberdyne Systems",
  "Oscorp",
  "LexCorp",
  "Massive Dynamic",
  "Weyland-Yutani",
  "Aperture Science",
  "InGen",
  "Tyrell Corporation",
  "Rekall",
  "Omni Consumer Products",
  "Virtucon",
  "Nakatomi Trading Corp",
  "Wonka Industries",
  "Duff Brewing Company",
  "Oceanic Airlines",
  "Gringotts",
  "Gekko & Co",
  "Dunder Mifflin",
  "Bluth Company",
  "Sterling Cooper",
  "Hooli",
  "Pied Piper",
  "Prestige Worldwide",
]

const jobTitles = [
  "Software Engineer",
  "Product Manager",
  "Data Scientist",
  "UX Designer",
  "Marketing Manager",
  "Sales Representative",
  "HR Specialist",
  "Financial Analyst",
  "Project Manager",
  "Operations Manager",
  "Customer Support Specialist",
  "Content Writer",
  "Graphic Designer",
  "Business Analyst",
  "QA Engineer",
  "DevOps Engineer",
  "System Administrator",
  "Network Engineer",
  "CEO",
  "CTO",
  "CFO",
  "COO",
  "Director of Marketing",
  "Director of Sales",
  "Director of Engineering",
  "VP of Product",
  "VP of Engineering",
  "VP of Marketing",
  "VP of Sales",
  "VP of Finance",
]

const loremWords = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "ut",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat",
  "duis",
  "aute",
  "irure",
  "dolor",
  "in",
  "reprehenderit",
  "in",
  "voluptate",
  "velit",
  "esse",
  "cillum",
  "dolore",
  "eu",
  "fugiat",
  "nulla",
  "pariatur",
  "excepteur",
  "sint",
  "occaecat",
  "cupidatat",
  "non",
  "proident",
  "sunt",
  "in",
  "culpa",
  "qui",
  "officia",
  "deserunt",
  "mollit",
  "anim",
  "id",
  "est",
  "laborum",
]

// Helper function to generate a random hex color
function getRandomHexColor(): string {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

// Helper function to generate a random IP address
function getRandomIPAddress(): string {
  return `${getRandomNumber(1, 255)}.${getRandomNumber(0, 255)}.${getRandomNumber(0, 255)}.${getRandomNumber(0, 255)}`
}

// Helper function to generate a random credit card number (fake, not valid)
function getRandomCreditCardNumber(): string {
  const prefixes = ["4", "5", "37", "34", "6011", "3"]
  const prefix = getRandomItem(prefixes)
  
  let ccNumber = prefix
  // Fill the rest with random digits
  while (ccNumber.length < 16) {
    ccNumber += Math.floor(Math.random() * 10).toString()
  }
  
  // Format with spaces for readability
  return ccNumber.replace(/(.{4})/g, "$1 ").trim()
}

// Helper function to generate a random password
function getRandomPassword(length = 12): string {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const numbers = "0123456789"
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?"
  
  const allChars = uppercase + lowercase + numbers + symbols
  let password = ""
  
  // Ensure at least one of each character type
  password += getRandomItem(uppercase.split(''))
  password += getRandomItem(lowercase.split(''))
  password += getRandomItem(numbers.split(''))
  password += getRandomItem(symbols.split(''))
  
  // Fill the rest randomly
  for (let i = 4; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length))
  }
  
  // Shuffle the password characters
  return password.split('').sort(() => 0.5 - Math.random()).join('')
}

// Generate fake data based on selected fields and row count
export function generateFakeData(fields: DataField[], rowCount: number): GeneratedData[] {
  const data: GeneratedData[] = []

  for (let i = 0; i < rowCount; i++) {
    const row: GeneratedData = {}

    // Generate a first and last name that we'll reuse for related fields
    const firstName = getRandomItem(firstNames)
    const lastName = getRandomItem(lastNames)

    fields.forEach((field) => {
      switch (field.id) {
        case "fullName":
          row[field.id] = `${firstName} ${lastName}`
          break
        case "firstName":
          row[field.id] = firstName
          break
        case "lastName":
          row[field.id] = lastName
          break
        case "email":
          row[field.id] = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${getRandomItem(domains)}`
          break
        case "phone":
          row[field.id] = `(${getRandomNumber(100, 999)}) ${getRandomNumber(100, 999)}-${getRandomNumber(1000, 9999)}`
          break
        case "address":
          row[field.id] = `${getRandomNumber(100, 9999)} ${getRandomItem(streets)}`
          break
        case "city":
          row[field.id] = getRandomItem(cities)
          break
        case "country":
          row[field.id] = getRandomItem(countries)
          break
        case "zipCode":
          row[field.id] = getRandomNumber(10000, 99999).toString()
          break
        case "username":
          row[field.id] = `${firstName.toLowerCase()}${lastName.toLowerCase()}${getRandomNumber(1, 999)}`
          break
        case "company":
          row[field.id] = getRandomItem(companies)
          break
        case "jobTitle":
          row[field.id] = getRandomItem(jobTitles)
          break
        case "date":
          // Generate a date in the last 50 years
          const endDate = new Date()
          const startDate = new Date()
          startDate.setFullYear(endDate.getFullYear() - 50)
          const randomDate = getRandomDate(startDate, endDate)
          row[field.id] = randomDate.toISOString().split("T")[0] // Format as YYYY-MM-DD
          break
        case "text":
          // Generate a random lorem ipsum text (3-10 words)
          const wordCount = getRandomNumber(3, 10)
          const words = []
          for (let j = 0; j < wordCount; j++) {
            words.push(getRandomItem(loremWords))
          }
          // Capitalize first letter
          words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
          row[field.id] = words.join(" ")
          break
        case "creditCard":
          row[field.id] = getRandomCreditCardNumber()
          break
        case "ipAddress":
          row[field.id] = getRandomIPAddress()
          break
        case "color":
          row[field.id] = getRandomHexColor()
          break
        case "password":
          row[field.id] = getRandomPassword()
          break
        default:
          // Handle custom fields if needed
          row[field.id] = `Value for ${field.id}`
      }
    })

    data.push(row)
  }

  return data
}
