

##CREATE APP

##DATABASE AUTHENICATION
- follow docs
- http.ts
- npm i svix
- schema.ts

##LAYOUT

```
      <div className="hidden lg:block">Desktop SideBar</div>
      <div className="flex flex-col flex-grow">
        <main className="flex-grow lg:pl-80">
          {children}
        </main>
        <div className="block lg:hidden mt-auto p-8 border-t">Mobile Bottom Nav</div>
      </div>
    </div>
```