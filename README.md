# Payouts

Payouts is a simple web application for accessing and visualizing payout records. It is built in React using Node.js 19.9.0 and NPM 9.6.3.

# Philosophy

Three principles guide the development of this application.

1. **Flexible Typing:** Overly restrictive typing makes an application rigid and brittle. The typing approach in this application is to constrain variables by data format, rather than value. For instance, a variable may be required to contain a string, but not specific _string values_. This choice ensures smooth future modification and extensibility of the application.
2. **Careful Validation:** TypeScript offers few guarantees if external network data is not adequately parsed and validated. This application ensures that all incoming data is adequately parsed and validated.
3. **Linting and Formatting:** Code bases grow at an astounding speed. To ensure future maintainability, this project is configured to enforce the [XO style guide](https://github.com/xojs/xo) for TypeScript, as well as the [Prettier formatting rules](https://prettier.io/), with just a few modifications.

In terms of tooling, the project uses Vite for the local development environment. 

# Dependencies

All packages can be found in the `package.json` file. Major packages include:

- [Styled-components](https://styled-components.com/)
- [SWR](https://swr.vercel.app/)
- [Luxon](https://moment.github.io/luxon/#/)
- [Lodash](https://lodash.com/)

# Development

To start this application in development mode, simply run:

```
npm install
npm run dev
```

Ensure that you have an `.env` file with a `VITE_PAYOUTS_API` variable set to the URL of the appropriate API.

# License

This project is licensed under the [GNU Affero General Public License (AGPLv3)](https://www.gnu.org/licenses/agpl-3.0.html).