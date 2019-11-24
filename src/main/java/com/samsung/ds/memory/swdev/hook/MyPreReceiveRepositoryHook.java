package com.samsung.ds.memory.swdev.hook;

import com.atlassian.bitbucket.hook.*;
import com.atlassian.bitbucket.hook.repository.*;
import com.atlassian.bitbucket.repository.*;

import java.util.Collection;

public class MyPreReceiveRepositoryHook implements PreReceiveRepositoryHook
{
    /**
     * Disables deletion of branches
     */
    @Override
    public boolean onReceive(RepositoryHookContext context, Collection<RefChange> refChanges, HookResponse hookResponse)
    {
        hookResponse.err().println("Hello World Hook Test");
        return false;
    }
}
