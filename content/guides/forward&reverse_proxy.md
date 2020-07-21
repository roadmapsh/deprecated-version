## **Proxy Server**  

***Every web request which is sent from the client web server goes through a type of proxy server.*** A proxy server acts as a gateway between client *(you)* and the internet and  seperates end-users from the websites you browse. It replaces the source IP address of the web request with the proxy server's IP address and then forwards it to the web server. The web server unaware the client, it only sees the proxy server. this is extremely important from a privacy point of view.    

![Proxy Server Description](https://github.com/ebrahimbharmal007/my-images/blob/master/proxyserver_example.png)    
> NOTE: This is not an accurate description rather just an illustration.    
     
### **Forward Proxy Server**    

Forward Proxy follows the same concept as explained above. It sits in front of multiple clients or client sources and forwards it to their respective destination/web server.    

![Forward Proxy Description](https://github.com/ebrahimbharmal007/my-images/blob/master/forward_proxy.png)    
> NOTE: This is not an accurate description rather just an illustration

### **Reverse Proxy Server**    

A Reverse Proxy server sits in front of the website servers and manages requests. The client or the client's proxy server only sees the website's proxy server and cannot directly communicate with the web server and thus mitigates security risks.    

![Reverse Proxy Description](https://github.com/ebrahimbharmal007/my-images/blob/master/reverse_proxy.png)    
> NOTE: This is not an accurate description rather just an illustration. Red lines represent server's response and black lines represent initial request from client(s).    

### Advantages of Proxy Servers    

Apart from forwarding traffic to its destination, proxy servers act as a  ***firewall*** and ***load balancer***. It also caches web requests to improve performance. Other major uses of a proxy server are as follows:    

* **Restrictions on internet usage** of employees in an organization or of children in a household
* **Privacy benefits** as your IP/web-request is never exposed directly
* **Improved security** 
* **Access to blocked resources**

Free proxy servers come with risks associtated with them. They might **log the requests** and that defeats its security and privacy benefits. Some might have poor encryption which might expose sensitive information if the proxy server is compromised.    

### Summary   

If the above information was too techincal for you, I have a simple analogy for you.    

At a restaurant the waiter/waitress takes your order and gives it to the kitchen head chef. The head chef then calls out the order and assigns tasks to everyone in the kitchen.    

In this analogy: 

* **You are the client**
* **Your order is the web request**
* **Waiter/Waitress is your forward proxy server**
* **Kitchen head chef is the reverse proxy server**
* **Other chefs working in the kicthen are the website servers**
