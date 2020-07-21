
A proxy server acts like a gateway between client *(you)* and the internet. Proxy server seperates end-users from the websites you browse. ***Every web request which is sent from the client to a real web server goes through some type of proxy server.***    

In this guide we will cover:

* **What is a proxy server?**
* **What is forward proxy?**
* **What is reverse proxy?**
* **Why do we need a proxy server?**


## Introduction


**What is a proxy server?**  

A proxy server acts like a gateway between the client and the server. Whenever the client sends a web request it goes through one or more types of proxy servers before reaching the website server. Proxy server replaces source IP address of the web request with the proxy server's IP address and then forwards it to the web server. The web server doesn't know anything about the client, the web server only sees the proxy server and this is extremely important from a privacy point of      view.    

![Proxy Server Description](https://drive.google.com/file/d/1jB00YiuhkfGWOkZws0AZtl7TlZKAOoao/view?usp=sharing)    
> NOTE: This is not an accurate description rather just an illustration

## Forward Proxy    
    
**What is forward proxy?**    

Forward Proxy is the same concept as explained above. Forward Proxy server sits in front of multiple clients. Forward proxy server accepts requests from multiple clients or client sources and forwards it to their respective destinantion/web server.    

![Forward Proxy Description](https://drive.google.com/file/d/10ZfDjMnAnDuq6vPvkNGsizu3-jO5eJJT/view?usp=sharing)    
> NOTE: This is not an accurate description rather just an illustration

## Reverse Proxy    

**What is reverse proxy?**    

A Reverse Proxy server sits in front of the website servers and manages requests. The client or the client's proxy server only sees the website's proxy server and can't directly communicate with the web server and thus mititgates security risks.    

![Reverse Proxy Description](https://drive.google.com/file/d/1UQJzt59BI40phbqOUAHkrUm0TRODx8YZ/view?usp=sharing)    
> NOTE: This is not an accurate description rather just an illustration. Red lines represent server's response and black lines represent initial request from client(s).    

Now some people would say...    

> "pRoXy sErVeRs jUsT FoRwArD ReQuEsT So wHaT?"    

**NO!** proxy servers do much more than that!    

## Why do we need proxy servers?    

Apart from forwarding traffic to its destination, proxy servers act as a  ***firewall*** and ***load balancer***. Proxy servers also cache web requests to imporve performance. Other major uses of a proxy server are as follows:    

* **Control internet usage of employees in an organization or of children in a household**
* **Privacy benefits as your IP/web-request is never exposed directly**
* **Improved security**
* **Access to blocked resources**

Free proxy servers come with risk associtated with them. Free proxy server might **log** the requests and that defeats the purpose of a proxy server. Some might have poor encryption which might expose your details when the proxy server is compromised.    

## Summary   

If you didn't understand anything then don't worry, I have a simple analogy for you.    

At a restaurant the waiter/waitress takes your order and gives it to the kitchen head chef. The head chef then calls out the order and assigns tasks to everyone in the kitchen.    

In this analogy: 

* **You are the client**
* **Your order is the web request**
* **Waiter/Waitress is your forward proxy server**
* **Kitchen head chef is the reverse proxy server**
* **Other chefs working in the kicthen are the website servers**

### <div style="text-align: center"> Thank you!! </div>