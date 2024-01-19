import React from "react";

export default function User({user:{displayName,photoURL}}){

    return (
        <div className="flex gap-2 items-center text-yellow-500">
            {photoURL && <img className="rounded-full w-10 h-10 max-sm:hidden" src={photoURL} alt={displayName} />}
            <h3 className="truncate">{displayName}</h3>
        </div>
        )
}