use anchor_lang::prelude::*;

declare_id!("2rBwsS1SY4gAYpzzfxK7aF17vpTqQyY9FqAUyAxt6qkn");

#[program]
pub mod myepicproject {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
