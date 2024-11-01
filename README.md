## Technology Stack that I used 🧑‍💻
This project was built using the following **modern technologies**.
1. [`VueJS`](https://vuejs.org/) is a JavaScript framework for building web user interfaces with a component-based architecture
2. [`Ionic Framework`](https://ionicframework.com/) is an open source mobile UI toolkit for building modern, high quality cross-platform mobile apps from a single code.
3. [`CapacitorJS`](https://capacitorjs.com/) is a utility-first CSS framework that provides a set of low-level utility classes for building custom designs directly in your HTML.
4. [`TailwindCSS`](https://tailwindcss.com/) is an open-source native runtime that enables the creation of cross-platform iOS, Android, and Progressive Web Apps using JavaScript, HTML, and CSS.

## Design
The user interfaces associated within the project is based on a UI design in `Figma` in which I utilized both `TailwindCSS` and `Ionic Framework` in replicating the overall UI design and UX. 

## How to run the project

1. **Clone the repository**

    ```bash
    git clone https://github.com/joeseffdl/vue-ionic.git
    ```

2. **Install Dependencies**
   - Make sure you have `Ionic CLI` installed in your system:
      - Check their documentation on [Ionic CLI Installation](https://ionicframework.com/docs/intro/cli) 
   - Open the project in your IDE and run:
   ```bash
      npm install
   ```
   
3. **Running the Development Server**
   - Start your development environment to serve your application:
   ```bash
   ionic serve
   ```
## Build and Run project using Native IDE
```bash
# Build the project
ionic capacitor build 

# Launch project using Android Studio
ionic capacitor build android

# Launch project using XCode
ionic capacitor build ios
```