# Amazo

Amazo is a decentralized e-commerce platform which runs on the polygon blockchain. It incorporates a B2C business model. It leverages blockchain technology to make secure and instant payments.

# Cloning & Running

1.  Clone the [GitHub repository](https://github.com/Dhairya-Sarin/Amazo-A-web3-based-e-commerce-platform) into your system.

2.  Open terminal with path as the root of the cloned folder.

3.  Install dependencies,

    -   `npm install` to install all NPM packages.
    -   `yarn install` to install all YARN dependencies.

    This step requires your system to have Node.js v17.x along with YARN installed as a system or global NPM package.

4.  Run the server using `yarn start`. This will launch the application at http://localhost:3000/.

5.  It is essential to have the [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) extension installed on your browser to make transactions along with some test MATIC coins to simulate payments.

    These test MATIC coins could be found on faucets like one by [Polygon](https://faucet.polygon.technology/). The user should be connected to the Mumbai Testnet to facilitate all transactions.

# Problem it Solves

A typical e-commerce is built around convenience, but it fails to ensure customer privacy. User data is collected in the name of improving experience and the concept of consent becomes a farce.

We have seen the privacy breaches that usually accompany such institutions as their databases quickly turn into goldmines for hackers and other malicious agents. All these problems have certainly made the segment ripe for disruption.

Moreover international e-commerce stores such as Ali Baba and Ebay are also notorious for high degrees of premium that are often levied on international transactions by payment facilitators.
These problems and hurdles are making international e-commerce increasingly difficult day by day.

In case of international sanctions and removal from banking systems eg SWIFT, it becomes impossible for ordinary citizens to be a part of international commerce. This leaves them in a vulnerable state as their country's governmental policies might end up excluding them from the international markets and hereby cripple their consumer rights.

The fundamentals of globalization were to ensure a more direct participation of individuals across state and national lines. However this has been accompanied by a consolidation of power in the hands of a few.It is this status quo that we intend to challenge by leveraging the power of blockchain technologies and incorporating cryptocurrency payments in a traditional e-commerce environment.

The incentives are duo fold as,

-   The consumers benefit from a reduction in taxes that are often levied by payment facilitators and enjoy a sense of enhanced privacy as their data is not being extracted and sold by powerful data aggregators.

-   The sellers are also incentivised in the sense that their product reaches a far wider audience which cuts across international borders and state lines, moreover the ease of instant crypto payments only encourages this shift.

# Challenges Faced

Building a decentralized platform comes with its own set of challenges. While we initially thought of a P2P market place that would allow for individual interactions, we quickly realized that this would have major security issues as we are dealing with the ownership and delivery of real physical products due to which it is impossible to ensure the integrity of both the buyer and the seller.

We initially though of establishing an escrow account and only delegate payments after confirmation of delivery , however we still ran into the issue of malicious actors trying to abuse our system. After a great deal of thought we settled on a B2C model wherein all the products would be owned by the institution, which would in turn ensure the integrity of all transactions, it is this model which works on a Proof of Reputation per say which helps us build a reliable application.

However in our pursuit we realized that there is some quantum of data which is inalienable with respect to an e-commerce store, data such as delivery addresses and wallet balances is something which cannot be abstracted and hence needs to be collected.

It is this issue that compelled us to use a traditional database on top of our blockchain to store such critical information.While this does render our application as a semi decentralized platform, we hope that with newer technological advancements we can one day establish a truly decentralized platform which is truly independent of traditional databases.

While the above highlights some of the conceptual challenges, we also ran into a couple of technical ones.Without getting into the nitty gritty details , one of the glaring challenges were to ensure the real time prices of the Matic token. Since we used an UniSwap API to fetch our Matic prices in real time they were pegged to the US dollar instead of the INR. This proved to be a rather intricate challenge as it involved us using Axios to incorporate a third party api to convert all our prices into INR.
