import socket
import threading
import random
import queue

def start_server():
    messages = queue.Queue()
    clients = []
    server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    admin = False
    acces = False
    port = 0
    name = input("Nickname: ")

    print("type /new *index* or /connect *index*")
    msg = input()
    
    words = msg.split()
    while port == 0:

        if words[0] == "/new":
            admin = True
            acces = True
            port = int(words[1])
            server.bind(("localhost", port))
            
            
        elif words[0] == "/connect":
            client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
            client.bind(("localhost", random.randint(1000, 9000)))
            
            
            def receive():
                while True:
                    try:
                        message, _ = client.recvfrom(1024)
                        print(message.decode())
                    except:
                        pass
            
            t = threading.Thread(target=receive)
            t.start()
            
            client.sendto(f"SIGNUP_TAG:{name}".encode(), ("localhost", int(words[1])))
        
            while True:
                message = input("")
                if message == "!q":
                    exit()
                else:
                    client.sendto(f"{name}: {message}".encode(), ("localhost", int(words[1])))

    def receive():
        while True:
            try:
                message, addr = server.recvfrom(1024)
                messages.put((message, addr))
            except:
                pass
    
    def broadcast():
        while True:
            while not messages.empty():
                message, addr = messages.get()
                print(message.decode())
                if addr not in clients:
                    clients.append(addr)
                for client in clients:
                    try:
                        if message.decode().startswith("SIGNUP_TAG"):
                            name = message.decode()[message.decode().index(":")+1:]
                            if admin:
                                solution = input("print /accept or /deny\n")
                                if solution == "/accept":
                                    server.sendto(f"{name} enter".encode(), client)
                                else:
                                    client.exit()
                        else:
                            server.sendto(message.encode(), client)
                    except:
                        pass
    
    t1 = threading.Thread(target=receive)
    t2 = threading.Thread(target=broadcast)
    
    t1.start()
    t2.start()
    




def main():
    start_server_thread = threading.Thread(target=start_server)
    
    start_server_thread.start()

if __name__ == "__main__":
    main()
